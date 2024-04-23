import { defineStore } from "pinia";
import axios from "axios";

export const useWeather = defineStore("weatherModule", {
  state: () => ({
    dayNow: {
      day: new Date().getDay(),
      month: new Date().getMonth(),
      minutes: new Date().getMinutes(),
      hours: new Date().getHours(),
      seconds: new Date().getSeconds(),
    },
    tempCity: {
      temperature: 0,
      tempMin: 0,
      tempMax: 0,
      nameCity: "Moscow",
      wind: 0,
      description: "",
      humidity: 0,
    },
    listTemp: [],
    visibleFiveDays: false,
  }),
  getters: {
    hideFiveDays() {
      this.visibleFiveDays = true;
    },
  },
  actions: {
    async getWeather(city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3c3c89550e3a518b73d3d3920e7cf5d6&lang=ru&tz=+03:00`
        );

        this.listTemp = [];

        let first_day = 0;

        this.tempCity.temperature = Math.ceil(
          response.data.list[first_day].main.temp
        );
        this.tempCity.tempMin = Math.ceil(
          response.data.list[first_day].main.temp_min
        );
        this.tempCity.tempMax = Math.ceil(
          response.data.list[first_day].main.temp_max
        );

        this.tempCity.nameCity = response.data.city.name;
        this.tempCity.wind = response.data.list[first_day].wind.speed;
        this.tempCity.description =
          response.data.list[first_day].weather[0].description;
        this.tempCity.humidity = response.data.list[first_day].main.humidity;

        for (let i = 0; i < 4; i += 1) {
          let item1 = +response.data.list[i].dt_txt
            .split(" ")[0]
            .split("-")
            .at(-1);

          this.listTemp.push(response.data.list[i]);
        }

        city.value = "";
      } catch (error) {
        console.log("Error");
      }
    },
  },
});
