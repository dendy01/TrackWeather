<template>
  <div class="info__temperature">
    <div class="info">
      <img src="@/assets/sun_cloud.webp" alt="sun" />
      <span class="heading">{{ props.tempCity.temperature }}<sup>℃</sup></span>
      <h5>
        {{ tempCity.tempMin }}<sup>℃</sup> - {{ tempCity.tempMax }}<sup>℃</sup>
      </h5>
      <h3>{{ props.tempCity.description }}</h3>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tempCity: Object,
  default: () => {},
});
</script>

<style lang="scss" scoped>
.info__temperature {
  width: 250px;
  height: auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  background: var(--grad);
  font-family: Arial;
  font-size: 20px;
  padding-bottom: 10px;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 20px;
    }

    .heading {
      color: var(--color-white);
      font-size: 76px;
      line-height: 99px;
    }

    h5 {
      color: var(--color-white);
      font-size: 24px;
      line-height: 31px;
      margin-top: 0;
    }

    h3 {
      color: var(--color-white);
      font-size: 20px;
      margin-top: 5px;
      text-align: center;
    }
  }
}
</style>
