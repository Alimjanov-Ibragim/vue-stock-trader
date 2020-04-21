<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/portfolio"
          class="nav-item"
          activeClass="active"
          tag="li"
        >
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link
          to="/stocks"
          class="nav-item"
          activeClass="active"
          tag="li"
        >
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li @click="endDay" class="nav-item">
          <a class="nav-link" href="#">End day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            Save & Load
            <span class="caret"></span>
          </a>
          <div
            class="dropdown-menu"
            :class="{ show: isDropdownOpen }"
            aria-labelledby="navbarDropdown"
          >
            <a @click="saveData" class="dropdown-item" href="#">Save Data</a>
            <a @click="loadData" class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right"
        >Funds: {{ funds | currency }}</strong
      >
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    loadData() {
      this.fetchData();
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

<style></style>
