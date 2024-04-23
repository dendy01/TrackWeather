<template>
  <div>
    <h1>Вход в аккаунт</h1>
    <my-button
      @click="
        weatherStore.hideFiveDays;
        $router.push('/');
      "
      >Войти</my-button
    >
  </div>
</template>

<script setup>
import { useWeather } from "@/store/homePageStore.js";

const weatherStore = useWeather();
</script>

<style lang="scss" scoped></style>
