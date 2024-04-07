<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <indicate-city @getWeath="getWeather" />
        <description-content
          :tempCity="tempCity"
          :dayNow="dayNow"
          :months="months"
          :days="days"
        />
      </div>
      <temperature-information :tempCity="tempCity" />
    </div>
  </div>
</template>

<script setup>
import DescriptionContent from "./components/DescriptionContent.vue";
import IndicateCity from "./components/IndicateCity.vue";
import TemperatureInformation from "./components/TemperatureInformation.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { days, months } from "./utils.js";

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

async function getWeather(cityValue) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=3c3c89550e3a518b73d3d3920e7cf5d6`
    );

    tempCity.value.temperature = Math.ceil(response.data.main.temp);
    tempCity.value.tempMin = Math.ceil(response.data.main.temp_min);
    tempCity.value.tempMax = Math.ceil(response.data.main.temp_max);

    tempCity.value.nameCity = response.data.name;
    tempCity.value.wind = response.data.wind.speed;
    tempCity.value.description = response.data.weather[0].description;
    tempCity.value.humidity = response.data.main.humidity;
    city.value = "";
  } catch (error) {
    console.log("Error");
  }
}

onMounted(() => {
  getWeather("Moscow");

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
@import "./scss/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 50px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: $--background-color;
}
</style>
