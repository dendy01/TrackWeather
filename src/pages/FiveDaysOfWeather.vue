<template>
  <div class="content">
    <indicate-city
      :nameCity="weatherStore.nameCity"
      @getWeath="weatherStore.getWeather"
    >
      <my-button @click="$router.push('/')" style="margin-left: 10px"
        >Назад</my-button
      >
    </indicate-city>
    <div class="heading">
      <div>Дата</div>
      <div>Время</div>
      <div>Температура</div>
      <div>Описание</div>
      <div>Ветер</div>
      <div>Влажность</div>
    </div>
    <div class="table" v-for="item in weatherStore.tempList" :key="item.dt">
      <div>{{ item.dt_txt.split(" ")[0] }}</div>
      <div>{{ item.dt_txt.split(" ")[1] }}</div>
      <div>{{ Math.ceil(item.main.temp) }}<sup>℃</sup></div>
      <div>{{ item.weather[0].description }}</div>
      <div>{{ item.wind.speed }} м/с</div>
      <div>{{ item.main.humidity }} %</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import IndicateCity from "@/components/IndicateCity.vue";
import { useWeatherFiveDays } from "@/store/fiveDaysStore.js";

const weatherStore = useWeatherFiveDays();

console.log(weatherStore);

onMounted(() => {
  weatherStore.getWeather(weatherStore.nameCity);
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 500px;
  font-family: Arial;
  font-size: 18px;
  overflow: auto;
  flex-direction: column;
  padding: 40px;
  border-radius: 20px;
  background-image: var(--background-img);

  .heading {
    margin-top: 10px;
  }

  .heading,
  .table {
    height: 60px;
    display: flex;
    justify-content: space-between;
    color: var(--color-white);

    div {
      height: 100%;
      width: 100%;
      text-align: center;
      padding: 15px;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
