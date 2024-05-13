<template>
  <div class="container">
    <div class="content">
      <IndicateCity
        :nameCity="weatherStore.nameCity"
        @getWeath="weatherStore.getWeather"
      >
        <my-button @click="$router.push('/')" style="margin-left: 10px"
          >Назад</my-button
        >
      </IndicateCity>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Время</th>
            <th>Темп.</th>
            <th>Описание</th>
            <th>Ветер</th>
            <th>Влажность</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in weatherStore.tempList" :key="item.dt">
            <td>
              {{
                item.dt_txt
                  .split(" ")[0]
                  .split("-")
                  .splice(1, 2)
                  .reverse()
                  .join(".")
              }}
            </td>
            <td>
              {{ item.dt_txt.split(" ")[1].split(":").splice(0, 2).join(":") }}
            </td>
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

  .content {
    width: 100%;
    height: 500px;
    font-size: 18px;
    overflow: auto;
    flex-direction: column;
    padding: 40px;
    border-radius: 20px;
    background-image: var(--background-img);
    background-size: 100% 100%;

    table thead th,
    table tbody td {
      width: 18%;
      padding: 15px;
      text-align: center;
      color: rgb(255, 255, 255);
      opacity: 0.9;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@media (max-width: 500px) {
  .container {
    width: 100%;
    padding: 0;

    .content {
      height: 100%;
      padding: 5px;
      border-radius: 0px;
      background-size: 1000px 100%;
      font-size: 14px;

      table {
        width: 100%;
        border-collapse: collapse;
      }

      table thead th,
      table tbody td {
        padding: 15px;
        text-align: center;
        color: var(--color-white);
        padding: 2px;
      }
    }
  }
}
</style>
