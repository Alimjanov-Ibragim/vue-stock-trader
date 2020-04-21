import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../components/portfolio/Portfolio.vue";
import Stocks from "../components/stocks/Stocks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: Stocks
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
