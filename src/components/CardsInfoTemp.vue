<template>
  <div class="container__cards">
    <div v-for="list in props.listTemp" :key="list.td" class="card">
      <div>
        <img
          v-if="list.weather[0].description === 'небольшой дождь'"
          src="../assets/rain_small.webp"
          alt="sun"
        />
        <img
          v-else-if="list.weather[0].description === 'дождь'"
          src="../assets/rain_small.webp"
          alt="sun"
        />
        <img
          v-else-if="list.weather[0].description === 'пасмурно'"
          src="../assets/cloudy.webp"
          alt="sun"
        />
        <img
          v-else-if="list.weather[0].description === 'облачно с прояснениями'"
          src="../assets/cloud_small.webp"
          alt="sun"
        />
        <img
          v-else-if="list.weather[0].description === 'ясно'"
          src="../assets/sun_small.webp"
          alt="sun"
        />
      </div>
      <div style="margin-bottom: 25px">
        <p style="margin-top: 0px">{{ list.dt_txt.split(" ")[0] }}</p>
        <p>{{ list.dt_txt.split(" ")[1] }}</p>
        <h2 class="heading">{{ Math.ceil(list.main.temp) }}<sup>℃</sup></h2>
        <p style="margin: 0 0 5px 0">{{ list.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  listTemp: Array,
});
</script>

<style lang="scss" scoped>
.container__cards {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

  .card {
    width: 200px;
    border-radius: 60px;
    background: var(--background-color);
    text-align: center;
    font-family: Arial;
    font-size: 20px;

    img {
      width: 125px;
      height: auto;
      margin-top: 10px;
    }

    p {
      margin-top: 15px;
    }

    h2 {
      color: var(--primary);
      font-size: 57px;
    }
  }

  .card:hover {
    background: var(--grad);
    color: var(--color-white);

    h2 {
      color: var(--color-white);
    }
  }
}
</style>
