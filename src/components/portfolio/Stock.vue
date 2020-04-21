<template>
  <div class="col mb-4">
    <div class="card">
      <div class="card-header p-3 bg-info text-white">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{ danger: insufficientQuantity }"
          />
        </div>
        <div class="float-right">
          <button
            @click="sellStock"
            class="btn btn-success"
            :disabled="insufficientQuantity || quantity <= 0"
          >
            {{ insufficientQuantity ? "Not enough Stocks" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
