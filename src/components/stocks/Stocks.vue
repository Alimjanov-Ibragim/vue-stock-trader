<template>
  <div class="row row-cols-1 row-cols-md-3">
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock" />
  </div>
</template>

<script>
import Stock from "./Stock";

export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style></style>
