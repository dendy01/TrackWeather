<template>
  <div class="content">
    <indicate-city :nameCity="nameCity" @getWeath="getWeather">
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
    <div class="table" v-for="item in tempList" :key="item.dt">
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
import { ref, onMounted } from "vue";
import axios from "axios";
import IndicateCity from "../components/IndicateCity.vue";

const nameCity = ref("Moscow");
const tempList = ref([]);

async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3c3c89550e3a518b73d3d3920e7cf5d6&lang=ru&tz=+03:00`
    );

    tempList.value = [];
    tempList.value = response.data.list;

    city.value = "";
  } catch (error) {
    console.log("Error");
  }
}

onMounted(() => {
  getWeather(nameCity.value);
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 500px;
  font-family: Arial;
  font-size: 20px;
  overflow: auto;

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
    }
  }
}

.content::-webkit-scrollbar {
  display: none;
}
</style>
