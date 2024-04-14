<template>
  <form @submit.prevent>
    <input
      v-model="city"
      class="input"
      type="text"
      placeholder="Укажите ваш город"
    />
    <button @click="getWeather" class="btn">Применить</button>
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
}

.btn {
  border: none;
  padding: 10px;
  margin-left: 10px;
  border-radius: 10px;
  background: var(--color-white);
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  color: var(--color-white);
  background-color: #9a9aff;
}
</style>
