import FiveDays from "@/pages/FiveDaysOfWeather.vue";
import HomePage from "@/pages/HomePage.vue";
import Authorization from "@/pages/Authorization.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/five-days-of-weather",
    component: FiveDays,
  },
  {
    path: "/authorization",
    component: Authorization,
  },
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory("/TrackWeather"),
});

export default router;
