<template>
  <div class="content__info">
    <div>
      <h1 class="heading__1">{{ weatherProps.tempCity.nameCity }}</h1>
    </div>
    <div class="currentDate">
      <p>
        {{ weatherProps.days[weatherProps.dayNow.day] }},
        {{ weatherProps.months[weatherProps.dayNow.month] }}
        {{ newDay }}
      </p>
      <p>
        Обновлено от: {{ weatherProps.dayNow.hours }}:{{
          weatherProps.dayNow.minutes
        }}:{{ weatherProps.dayNow.seconds }}
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
import DescriptionWeather from "@/components/home/HomeDescriptionWeather.vue";

const newDay = ref(new Date().getDate());

const weatherProps = defineProps({
  tempCity: Object,
  default: () => {},
  dayNow: Object,
  default: () => {},
  days: Array,
  default: () => [],
  months: Array,
  default: () => [],
});

const descriptCity = ref(weatherProps.tempCity);
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
