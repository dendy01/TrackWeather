import FiveDays from "@/pages/FiveDaysOfWeather.vue";
import HomePage from "@/pages/HomePage.vue";
import Authorization from "@/pages/Authorization.vue";
import Registration from "@/pages/Registration.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/FiveDaysOfWeather",
    component: FiveDays,
  },
  {
    path: "/Authorization",
    component: Authorization,
  },
  {
    path: "/Registration",
    component: Registration,
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
