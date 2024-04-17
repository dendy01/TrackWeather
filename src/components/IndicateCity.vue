<template>
  <form @submit.prevent>
    <input
      v-model="city"
      class="input"
      type="text"
      placeholder="Укажите ваш город"
    />
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
.input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  opacity: 0.9;
}
</style>
