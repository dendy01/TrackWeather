<template>
  <div class="nav">
    <h3>Войдите или зарегистрируйтесь чтобы увидеть прогноз на 5 дней</h3>
    <div>
      <my-button style="margin-right: 10px" @click="visibleFormGoIn"
        >Войти</my-button
      >
      <my-button @click="visibleFormRegistration">Зарегистрироваться</my-button>
    </div>
  </div>
</template>

<script setup>
import { useWeather } from "@/store/homePageStore.js";
import { defineEmits } from "vue";

const weatherStore = useWeather();
const emit = defineEmits(["visible"]);

const visibleFormGoIn = () => {
  emit("visible", true);
  weatherStore.visibleGoIn = true;
  weatherStore.visibleRegistration = false;
};

const visibleFormRegistration = () => {
  emit("visible", true);
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

@media (max-width: 500px) {
  .nav {
    padding: 10px 0 10px 0;

    h3 {
      text-align: center;
      font-size: 16px;
    }

    div {
      width: 500px;
      text-align: center;
    }
  }
}
</style>
