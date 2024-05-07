import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import axios from "axios";

export const useWeather = defineStore("weatherModule", () => {
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
  const visibleFiveDays = ref(false);
  const visibleGoin = ref(false);
  const visibleRegistration = ref(false);
  const users = ref([]);

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
        this.listTemp.push(response.data.list[i]);
      }

      city.value = "";
    } catch (error) {
      console.log("Error");
    }
  }

  return {
    dayNow,
    tempCity,
    listTemp,
    visibleFiveDays,
    visibleGoin,
    visibleRegistration,
    users,
    getWeather,
  };
});
