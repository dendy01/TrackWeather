import "./scss/style.scss";
import router from "./router/router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

import components from "./components/UI";

const app = createApp(App);
//const pinia = createPinia();

components.forEach((component) => {
  app.component(component.__name, component);
});

app.use(router).mount("#app");
