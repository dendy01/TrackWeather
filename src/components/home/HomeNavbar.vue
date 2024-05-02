<template>
  <div class="nav">
    <h3>Войдите или зарегистрируйтесь чтобы увидеть прогноз на 5 дней</h3>
    <div>
      <my-button style="margin-right: 10px" @click="hideGoIn">Войти</my-button>
      <my-button @click="hideRegistration">Зарегистрироваться</my-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useWeather } from "@/store/homePageStore.js";

const weatherStore = useWeather();
const router = useRouter();

const hideGoIn = () => {
  router.push("/authorization");
  weatherStore.visibleGoIn = true;
  weatherStore.visibleRegistration = false;
};

const hideRegistration = () => {
  router.push("/authorization");
  weatherStore.visibleGoIn = false;
  weatherStore.visibleRegistration = true;
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 10px 50px 10px 50px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
}
</style>
