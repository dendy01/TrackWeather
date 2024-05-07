<template>
  <div class="content__info">
    <div>
      <h1>{{ weatherProps.tempCity.nameCity }}</h1>
    </div>
    <div class="currentDate">
      <p>
        {{ weatherProps.days[weatherProps.dayNow.day] }},
        {{ weatherProps.months[weatherProps.dayNow.month] }}
        {{ newDay }}
      </p>
      <p>
        Обновлено от: {{ weatherProps.dayNow.hours }}:{{
          weatherProps.dayNow.minutes < 10
            ? "0" + weatherProps.dayNow.minutes
            : weatherProps.dayNow.minutes
        }}
      </p>
    </div>
    <description-weather :descriptCity="descriptCity" />
    <my-button
      v-if="weatherStore.visibleFiveDays"
      style="margin-top: 5px"
      @click="$router.push('/five-days-of-weather')"
      >Прогноз на 5 дней</my-button
    >
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import DescriptionWeather from "@/components/home/HomeDescriptionWeather.vue";
import { useWeather } from "@/store/homePageStore.js";

const weatherStore = useWeather();

const newDay = ref(new Date().getDate());

const weatherProps = defineProps({
  tempCity: {
    type: Object,
    default: () => {},
  },
  dayNow: {
    type: Object,
    default: () => {},
  },
  days: {
    type: Array,
    default: () => [],
  },
  months: {
    type: Array,
    default: () => [],
  },
});

const descriptCity = ref(weatherProps.tempCity);
</script>

<style lang="scss" scoped>
h1 {
  font-size: 76px;
  line-height: 99px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  opacity: 0.9;
}

.currentDate {
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: rgb(255, 255, 255);
  opacity: 0.9;

  p {
    font-size: 18px;
    line-height: 30px;
  }
}
</style>
