<template>
  <div class="card">
    <div class="img__item">
      <img :src="imgSet(props.itemTemp.weather[0].description)" />
    </div>
    <div class="card__item">
      <p>{{ props.itemTemp.dt_txt.split(" ")[0] }}</p>
      <p>{{ props.itemTemp.dt_txt.split(" ")[1] }}</p>
      <h2 class="heading">
        {{ Math.ceil(props.itemTemp.main.temp) }}<sup>℃</sup>
      </h2>
      <p>{{ props.itemTemp.weather[0].description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import smallRain from "@/assets/rain_small.webp";
import rain from "@/assets/rain_small.webp";
import cloudy from "@/assets/cloudy.webp";
import smallCloudy from "@/assets/cloud_small.webp";
import sun from "@/assets/sun_small.webp";

const props = defineProps({
  itemTemp: {
    type: Object,
    default: () => {},
  },
});

const list = ref([
  { id: 0, description: "небольшой дождь", src: smallRain },
  { id: 1, description: "дождь", src: rain },
  { id: 2, description: "пасмурно", src: cloudy },
  {
    id: 3,
    description: "облачно с прояснениями",
    src: smallCloudy,
  },
  { id: 4, description: "ясно", src: sun },
  { id: 5, description: "переменная облачность", src: smallCloudy },
  { id: 5, description: "небольшая облачность", src: smallCloudy },
  { id: 1, description: "снег", src: rain },
  { id: 1, description: "небольшой снег", src: rain },
]);

const imgSet = (description) => {
  for (const item of list.value) {
    if (description === item.description) {
      return `${item.src}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  height: 280px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-color);
  text-align: center;
  font-size: 15px;

  .img__item {
    width: 125px;
    height: 100px;
    margin-top: 10px;

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    margin-top: 10px;
  }

  h2 {
    color: var(--primary);
    font-size: 57px;
  }

  &:hover {
    background: var(--grad);
    color: var(--color-white);

    h2 {
      color: var(--color-white);
    }
  }
}

@media (max-width: 500px) {
  .card {
    width: 300px;
    text-align: center;
  }
}
</style>
