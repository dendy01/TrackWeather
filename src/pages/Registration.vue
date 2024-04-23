<template>
  <div>
    <h1>Регистрация</h1>
    <my-button
      @click="
        weatherStore.hideFiveDays;
        $router.push('/');
      "
      >Зарегистрироваться</my-button
    >
  </div>
</template>

<script setup>
import { useWeather } from "@/store/homePageStore.js";

const weatherStore = useWeather();
</script>

<style lang="scss" scoped></style>
