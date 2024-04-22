<template>
  <div class="content">
    <div>
      <indicate-city @getWeath="weatherStore.getWeather" />
      <description-content
        :tempCity="weatherStore.tempCity"
        :dayNow="weatherStore.dayNow"
        :months="months"
        :days="days"
      />
    </div>
    <div>
      <temperature-information :tempCity="weatherStore.tempCity" />
    </div>
  </div>
  <cards-info-temp :listTemp="weatherStore.listTemp" />
</template>

<script setup>
import DescriptionContent from "@/components/home/HomeDescriptionContent.vue";
import IndicateCity from "@/components/IndicateCity.vue";
import TemperatureInformation from "@/components/home/HomeTemperatureInformation.vue";
import CardsInfoTemp from "@/components/home/HomeCardsInfoTemperature.vue";
import { useWeather } from "@/store/homePageStore.js";
import { onMounted } from "vue";
import { days, months } from "@/globalVariable/utils.js";

const weatherStore = useWeather();

onMounted(() => {
  weatherStore.getWeather(weatherStore.tempCity.nameCity);

  setInterval(() => {
    if (weatherStore.dayNow.seconds >= 60) {
      weatherStore.dayNow.seconds = 0;
      weatherStore.dayNow.minutes += 1;
    }

    if (weatherStore.dayNow.minutes >= 60) {
      weatherStore.dayNow.minutes = 0;
      weatherStore.dayNow.hours += 1;
    }

    weatherStore.dayNow.seconds += 1;
  }, 1000);
});
</script>

<style lang="scss" scoped>
.content {
  padding: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  background-image: var(--background-img);
}
</style>
