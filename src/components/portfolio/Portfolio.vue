<template>
  <div class="row row-cols-1 row-cols-md-3">
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    Stock
  }
};
</script>

<style></style>
