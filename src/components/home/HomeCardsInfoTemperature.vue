<template>
  <div class="container__cards">
    <div v-for="item in props.listTemp" :key="item.td" class="cards">
      <img-card-item :itemTemp="item" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ImgCardItem from "./HomeCardItem.vue";

const props = defineProps({
  listTemp: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped>
.container__cards {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
</style>
