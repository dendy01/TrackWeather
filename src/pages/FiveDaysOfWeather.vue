<template>
  <div class="container">
    <div class="content">
      <indicate-city
        :nameCity="weatherStore.nameCity"
        @getWeath="weatherStore.getWeather"
      >
        <my-button @click="$router.push('/')" style="margin-left: 10px"
          >Назад</my-button
        >
      </indicate-city>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Время</th>
            <th>Температура</th>
            <th>Описание</th>
            <th>Ветер</th>
            <th>Влажность</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in weatherStore.tempList" :key="item.dt">
            <td>{{ item.dt_txt.split(" ")[0] }}</td>
            <td>{{ item.dt_txt.split(" ")[1] }}</td>
            <td>{{ Math.ceil(item.main.temp) }}<sup>℃</sup></td>
            <td>{{ item.weather[0].description }}</td>
            <td>{{ item.wind.speed }} м/с</td>
            <td>{{ item.main.humidity }} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import IndicateCity from "@/components/IndicateCity.vue";
import { useWeatherFiveDays } from "@/store/fiveDaysStore.js";

const weatherStore = useWeatherFiveDays();

onMounted(() => {
  weatherStore.getWeather(weatherStore.nameCity);
});
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  font-family: Arial;

  .content {
    width: 100%;
    height: 500px;
    font-size: 18px;
    overflow: auto;
    flex-direction: column;
    padding: 40px;
    border-radius: 20px;
    background-image: var(--background-img);

    table thead th,
    table tbody td {
      height: 60px;
      width: 145px;
      padding: 15px;
      text-align: center;
      color: var(--color-white);
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
