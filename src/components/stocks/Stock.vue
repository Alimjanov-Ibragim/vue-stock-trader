<template>
  <div class="col mb-4">
    <div class="card">
      <div class="card-header p-3 bg-success text-white">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{ danger: insufficientFunds }"
          />
        </div>
        <div class="float-right">
          <button
            @click="buyStock"
            class="btn btn-success"
            :disabled="insufficientFunds || quantity <= 0"
          >
            {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.card-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.float-left {
  margin-bottom: 10px;
}
.danger,
.form-control.danger:focus {
  border: none;
  box-shadow: 0 0 0 0.1rem red;
}
</style>
