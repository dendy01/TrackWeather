<template>
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
</template>

<script setup>
import HomeNavbar from "@/components/home/HomeNavbar.vue";
import DescriptionContent from "@/components/home/HomeDescriptionContent.vue";
import IndicateCity from "@/components/IndicateCity.vue";
import TemperatureInformation from "@/components/home/HomeTemperatureInformation.vue";
import CardsInfoTemp from "@/components/home/HomeCardsInfoTemperature.vue";
import { useWeather } from "@/store/homePageStore.js";
import { ref, onMounted } from "vue";
import { days, months } from "@/globalVariable/utils.js";

const weatherStore = useWeather();

onMounted(() => {
  weatherStore.getWeather(weatherStore.tempCity.nameCity);
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
