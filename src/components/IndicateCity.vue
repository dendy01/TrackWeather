<template>
  <form @submit.prevent>
    <my-input v-model="city" type="text" placeholder="Укажите ваш город" />
    <my-button @click="getWeather" style="margin-left: 10px"
      >Применить</my-button
    >
    <slot></slot>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const city = ref("");

const emit = defineEmits(["getWeath"]);

const getWeather = () => {
  emit("getWeath", city.value);
  city.value = "";
};
</script>

<style lang="scss" scoped>
form {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
</style>
