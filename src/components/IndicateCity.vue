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

<style scoped>
.input {
  padding: 10px;
  border-radius: 10px;
}

.btn {
  padding: 10px;
  margin-left: 10px;
  border-radius: 10px;
}
</style>
