<template>
  <div class="descript__weather">
    <div class="descript__item1">
      <img src="@/assets/w-cloud.webp" />
      <p>Ветер: {{ props.descriptCity.wind }}м/с</p>
    </div>
    <div class="descript__item2">
      <img src="@/assets/w-rain.webp" />
      <p>Влажность: {{ props.descriptCity.humidity }}%</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  descriptCity: Object,
  default: () => {},
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

  .descript__item1,
  .descript__item2 {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 35px;
      background: #7668e5;
      padding: 5px;
      border-radius: 7px;
    }
  }

  .descript__item2 {
    margin-top: 5px;
  }
}
</style>
