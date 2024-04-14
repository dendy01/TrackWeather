<template>
  <div class="container__cards">
    <div v-for="list in props.listTemp" :key="list.td">
      <img src="../assets/sun_cloud.webp" alt="sun" />
      <p>{{ list.dt_txt.split(" ")[0] }}</p>
      <h2 class="heading">{{ Math.ceil(list.main.temp) }}<sup>℃</sup></h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  listTemp: Array,
});

console.log(props.listTemp);

for (const item of props.listTemp) {
  console.log(item);
}
</script>

<style lang="scss" scoped>
.container__cards {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

  div {
    width: 180px;
    height: 240px;
    border-radius: 60px;
    background: var(--background-color);
    text-align: center;

    img {
      width: 100px;
      height: 100px;
      margin-top: 10px;
    }

    p {
      margin-top: 15px;
    }

    h2 {
      color: var(--primary);
      font-size: 57px;
    }
  }

  div:hover {
    background: var(--grad);
    color: var(--color-white);

    h2 {
      color: var(--color-white);
    }
  }
}
</style>
