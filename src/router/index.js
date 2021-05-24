import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meals",
    name: "Meals",
    component: () =>
      import(/* webpackChunkName: "Meals" */ "@/views/Meals.vue"),
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: () =>
      import(/* webpackChunkName: "Restaurants" */ "@/views/Restaurants.vue"),
  },
  {
    path: "/my-meal",
    name: "My-Meal",
    component: () =>
      import(/* webpackChunkName: "MyMeals" */ "@/views/MyMeals.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
