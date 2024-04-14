<template>
  <div class="descript__weather">
    <div style="display: flex; align-items: center">
      <img
        src="../assets/w-cloud.webp"
        style="background: #7668e5; padding: 6px; border-radius: 7px"
      />
      <p>Ветер: {{ props.descriptCity.wind }}м/с</p>
    </div>
    <div style="display: flex; align-items: center; margin-top: 5px">
      <img
        src="../assets/w-rain.webp"
        style="background: #7668e5; padding: 5px; border-radius: 7px"
      />
      <p>Влажность: {{ props.descriptCity.humidity }}%</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  descriptCity: Object,
});
</script>

<style lang="scss" scoped>
.descript__weather {
  padding: 20px;
  width: 300px;
  border-radius: 20px;
  list-style-type: none;
  margin-top: 40px;
  background-color: rgb(255 255 255);
  opacity: 0.9;

  p {
    margin-left: 20px;
  }
}
</style>
