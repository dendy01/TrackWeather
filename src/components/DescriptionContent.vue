<template>
  <div class="content__info">
    <div>
      <h1>{{ props.tempCity.nameCity }}</h1>
    </div>
    <div>
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
    <ul class="descript__weather">
      <li>Описание: {{ props.tempCity.description }}</li>
      <li>Ветер: {{ props.tempCity.wind }}м/с</li>
      <li>Влажность: {{ props.tempCity.humidity }}%</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const newDay = ref(0);

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

<style scoped>
.descript__weather {
  padding: 20px;
  width: 300px;
  border-radius: 20px;
  list-style-type: none;
  margin-top: 40px;
  background-color: rgb(255 255 255);
  opacity: 0.9;
}
</style>
