<template>
  <div class="wrapper">
    <div class="container"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const lat = ref(-90);
const lon = ref(100);
const apiKey = ref("1GJZNmbjhPbYpQ96kUtRGujyRcRg6n2PeW");
const tempMoscow = ref(0);

async function getWeather() {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=3c3c89550e3a518b73d3d3920e7cf5d6"
    );

    tempMoscow.value = response.data.main.temp;

    console.log(response.data.coord);
    console.log(`Температура москвы: ${response.data.main.temp}`);
  } catch (error) {
    console.log("Error");
  }
}

onMounted(() => {
  getWeather();
});
</script>

<style lang="scss">
@import "./scss/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  height: 600px;
  width: 1000px;
  margin: 0 auto;
  border-radius: 20px;
  background: $--color-powder-blue;
}
</style>
