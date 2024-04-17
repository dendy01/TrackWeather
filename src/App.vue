<template>
  <div class="wrapper">
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 50px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-image: url("src/assets/banner-img.6da33f89.png");
}
</style>
