<template>
  <div class="container">
    <home-navbar></home-navbar>
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
  </div>
</template>

<script setup>
import HomeNavbar from "@/components/home/HomeNavbar.vue";
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
});
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  font-family: Arial;

  .content {
    padding: 50px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    background-image: var(--background-img);
  }
}

@media (max-width: 500px) {
  .container {
    width: 100%;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content div {
      width: 300px;
      margin-top: 10px;
    }
  }
}
</style>
