<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <input
          v-model="city"
          class="input"
          type="text"
          placeholder="Укажите ваш город"
        />
        <button @click="getWeather" class="btn">Применить</button>

        <div class="content__info">
          <div>
            <h1>{{ tempCity.nameCity }}</h1>
          </div>
          <div>
            <p>{{ getWeekDay() }}, {{ getWeekMonth() }} {{ day }}</p>
            <p></p>
          </div>
          <ul class="descript__weather">
            <li>Описание: {{ tempCity.description }}</li>
            <li>Ветер: {{ tempCity.wind }}м/с</li>
            <li>Влажность: {{ tempCity.humidity }}%</li>
          </ul>
        </div>
      </div>
      <div class="info__temperature">
        <div class="info">
          <img src="./assets/sun_cloud.webp" alt="sun" />
          <span class="heading">{{ tempCity.temperature }}<sup>℃</sup></span>
          <h5>
            {{ tempCity.tempMin }}<sup>℃</sup> - {{ tempCity.tempMax
            }}<sup>℃</sup>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const city = ref("Moscow");
const day = new Date().getDay();
const month = new Date().getMonth();

const tempCity = ref({
  temperature: 0,
  tempMin: 0,
  tempMax: 0,
  nameCity: "",
  wind: 0,
  description: "",
  humidity: 0,
});

const temp = ref({});

async function getWeather() {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=3c3c89550e3a518b73d3d3920e7cf5d6`
    );

    tempCity.value.temperature = Math.ceil(response.data.main.temp);
    tempCity.value.tempMin = Math.ceil(response.data.main.temp_min);
    tempCity.value.tempMax = Math.ceil(response.data.main.temp_max);

    tempCity.value.nameCity = response.data.name;
    tempCity.value.wind = response.data.wind.speed;
    tempCity.value.description = response.data.weather[0].description;
    tempCity.value.humidity = response.data.main.humidity;
    console.log(response.data);
    city.value = "";
  } catch (error) {
    console.log("Error");
  }
}

const getWeekDay = () => {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[day];
};

const getWeekMonth = () => {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return months[month];
};
</script>

<style lang="scss">
@import "./scss/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 20px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: $--background-color;

  .content {
    height: 350px;
  }

  .descript__weather {
    padding: 20px;
    width: 300px;
    border-radius: 20px;
    margin-top: 10px;
    list-style-type: none;
    background-color: rgb(255 255 255);
    opacity: 0.9;
  }

  .info__temperature {
    width: 250px;
    height: 350px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: $--grad;

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    .heading {
      color: white;
      font-size: 76px;
      line-height: 99px;
    }

    h5 {
      color: white;
      font-size: 24px;
      line-height: 31px;
    }
  }

  .input {
    padding: 10px;
    border-radius: 10px;
  }

  .btn {
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;
  }
}
</style>
