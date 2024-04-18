<template>
  <div class="content">
    <div>
      <indicate-city @getWeath="getWeather" />
      <description-content
        :tempCity="tempCity"
        :dayNow="dayNow"
        :months="months"
        :days="days"
      />
    </div>
    <div>
      <temperature-information :tempCity="tempCity" />
    </div>
  </div>
  <cards-info-temp :listTemp="listTemp" />
</template>

<script setup>
import DescriptionContent from "../components/DescriptionContent.vue";
import IndicateCity from "../components/IndicateCity.vue";
import TemperatureInformation from "../components/TemperatureInformation.vue";
import CardsInfoTemp from "../components/CardsInfoTemp.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { days, months } from "../globalVariable/utils.js";

const temp = ref({});

const dayNow = ref({
  day: new Date().getDay(),
  month: new Date().getMonth(),
  minutes: new Date().getMinutes(),
  hours: new Date().getHours(),
  seconds: new Date().getSeconds(),
});

const tempCity = ref({
  temperature: 0,
  tempMin: 0,
  tempMax: 0,
  nameCity: "Moscow",
  wind: 0,
  description: "",
  humidity: 0,
});

const listTemp = ref([]);

async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3c3c89550e3a518b73d3d3920e7cf5d6&lang=ru&tz=+03:00`
    );

    listTemp.value = [];

    let first_day = 0;

    tempCity.value.temperature = Math.ceil(
      response.data.list[first_day].main.temp
    );
    tempCity.value.tempMin = Math.ceil(
      response.data.list[first_day].main.temp_min
    );
    tempCity.value.tempMax = Math.ceil(
      response.data.list[first_day].main.temp_max
    );

    tempCity.value.nameCity = response.data.city.name;
    tempCity.value.wind = response.data.list[first_day].wind.speed;
    tempCity.value.description =
      response.data.list[first_day].weather[0].description;
    tempCity.value.humidity = response.data.list[first_day].main.humidity;

    for (let i = 0; i < 4; i += 1) {
      let item1 = +response.data.list[i].dt_txt.split(" ")[0].split("-").at(-1);

      listTemp.value.push(response.data.list[i]);
    }

    city.value = "";
  } catch (error) {
    console.log("Error");
  }
}

onMounted(() => {
  getWeather(tempCity.value.nameCity);

  setInterval(() => {
    if (dayNow.value.seconds >= 60) {
      dayNow.value.seconds = 0;
      dayNow.value.minutes += 1;
    }

    if (dayNow.value.minutes >= 60) {
      dayNow.value.minutes = 0;
      dayNow.value.hours += 1;
    }

    dayNow.value.seconds += 1;
  }, 1000);
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  padding: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  background-image: url("src/assets/banner-img.6da33f89.png");
}
</style>
