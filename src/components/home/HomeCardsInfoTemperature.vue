<template>
  <div class="container__cards">
    <div v-for="item in props.listTemp" :key="item.td" class="cards">
      <ImgCardItem :itemTemp="item" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ImgCardItem from "./HomeCardItem.vue";

const props = defineProps({
  listTemp: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.container__cards {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 500px) {
  .container__cards {
    width: 100%;
    display: block;
  }

  .cards {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
