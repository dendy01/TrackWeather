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
    <div class="descript__weather">
      <div style="display: flex; align-items: center">
        <img
          src="../assets/w-cloud.webp"
          style="background: #7668e5; padding: 6px; border-radius: 7px"
        />
        <p>Ветер: {{ props.tempCity.wind }}м/с</p>
      </div>
      <div style="display: flex; align-items: center; margin-top: 5px">
        <img
          src="../assets/w-rain.webp"
          style="background: #7668e5; padding: 5px; border-radius: 7px"
        />
        <p>Влажность: {{ props.tempCity.humidity }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const newDay = ref(new Date().getDate());

const props = defineProps({
  tempCity: Object,
  dayNow: Object,
  days: Array,
  months: Array,
});

if (props.dayNow.day === 0) {
  newDay.value = 7;
}
</script>

<style lang="scss" scoped>
.descript__weather {
  padding: 20px;
  width: 300px;
  border-radius: 20px;
  list-style-type: none;
  margin-top: 40px;
  background-color: rgb(255 255 255);
  opacity: 0.9;

  p {
    margin-left: 20px;
  }
}

.heading__1 {
  font-size: 76px;
  line-height: 99px;
  font-weight: 700;
}

.currentDate {
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  p {
    font-size: 18px;
    line-height: 30px;
  }
}
</style>
