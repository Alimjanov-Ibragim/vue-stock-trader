import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

import VueResouce from "vue-resource";
Vue.use(VueResouce);

Vue.http.options.root =
  "https://vue-stock-trader-2c4b7.firebaseio.com/vue-stock-trader/";

Vue.config.productionTip = false;

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
