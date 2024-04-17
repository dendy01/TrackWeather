import Main from "../pages/FiveDaysOfWeather.vue";
import HomePage from "../pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/FiveDaysOfWeather",
    component: Main,
  },
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
