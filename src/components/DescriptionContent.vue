<template>
  <div class="content__info">
    <div>
      <h1 class="heading__1">{{ props.tempCity.nameCity }}</h1>
    </div>
    <div class="currentDate">
      <p>
        {{ props.days[props.dayNow.day] }},
        {{ props.months[props.dayNow.month] }}
        {{ newDay }}
      </p>
      <p>
        Обновлено от: {{ props.dayNow.hours }}:{{ props.dayNow.minutes }}:{{
          props.dayNow.seconds
        }}
      </p>
    </div>
    <description-weather :descriptCity="descriptCity"></description-weather>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import DescriptionWeather from "./DescriptionWeather.vue";

const newDay = ref(new Date().getDate());

const props = defineProps({
  tempCity: Object,
  dayNow: Object,
  days: Array,
  months: Array,
});

const descriptCity = ref(props.tempCity);
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
