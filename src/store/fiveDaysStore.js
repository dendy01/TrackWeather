import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherFiveDays = defineStore("weatherFiveDays", {
  state: () => ({
    nameCity: "Москва",
    tempList: [],
  }),
  actions: {
    async getWeather(city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3c3c89550e3a518b73d3d3920e7cf5d6&lang=ru&tz=+03:00`
        );

        this.tempList = [];
        this.tempList = response.data.list;
      } catch (error) {
        console.log("Error");
      }
    },
  },
});
