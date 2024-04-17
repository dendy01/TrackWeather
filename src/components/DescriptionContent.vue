<template>
  <div class="content__info">
    <div>
      <h1 class="heading__1">{{ weather_props.tempCity.nameCity }}</h1>
    </div>
    <div class="currentDate">
      <p>
        {{ weather_props.days[weather_props.dayNow.day] }},
        {{ weather_props.months[weather_props.dayNow.month] }}
        {{ newDay }}
      </p>
      <p>
        Обновлено от: {{ weather_props.dayNow.hours }}:{{
          weather_props.dayNow.minutes
        }}:{{ weather_props.dayNow.seconds }}
      </p>
    </div>
    <description-weather :descriptCity="descriptCity"></description-weather>
    <my-button
      style="margin-top: 5px"
      @click="$router.push('/FiveDaysOfWeather')"
      >Прогноз на 5 дней</my-button
    >
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import DescriptionWeather from "./DescriptionWeather.vue";

const newDay = ref(new Date().getDate());

const weather_props = defineProps({
  tempCity: Object,
  dayNow: Object,
  days: Array,
  months: Array,
});

const descriptCity = ref(weather_props.tempCity);
</script>

<style lang="scss" scoped>
.content__info {
  font-family: Arial;
}

.heading__1 {
  font-size: 76px;
  line-height: 99px;
  font-weight: 700;
  color: var(--color-white);
}

.currentDate {
  width: 350px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: var(--color-white);

  p {
    font-size: 18px;
    line-height: 30px;
  }
}
</style>
