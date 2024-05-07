<template>
  <div class="container">
    <home-navbar @visible="showDialog" />
    <my-dialog v-model:show="dialogVisible">
      <authorization @hide="hideDialog"></authorization>
    </my-dialog>
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
import Authorization from "./Authorization.vue";
import HomeNavbar from "@/components/home/HomeNavbar.vue";
import DescriptionContent from "@/components/home/HomeDescriptionContent.vue";
import IndicateCity from "@/components/IndicateCity.vue";
import TemperatureInformation from "@/components/home/HomeTemperatureInformation.vue";
import CardsInfoTemp from "@/components/home/HomeCardsInfoTemperature.vue";
import { useWeather } from "@/store/homePageStore.js";
import { ref, onMounted } from "vue";
import { days, months } from "@/globalVariable/utils.js";

const weatherStore = useWeather();
const dialogVisible = ref(false);

const showDialog = () => {
  dialogVisible.value = true;
};

const hideDialog = () => {
  dialogVisible.value = false;
};

onMounted(() => {
  weatherStore.getWeather(weatherStore.tempCity.nameCity);
});
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 0 auto;

  .content {
    padding: 50px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    background-image: var(--background-img);
    background-size: 100% 100%;
  }
}

@media (max-width: 500px) {
  .container {
    width: 100%;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-size: 100% 100%;
    }

    .content div {
      width: 300px;
      margin-top: 10px;
    }
  }
}
</style>
