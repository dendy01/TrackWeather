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
  width: 1000px;
  margin: 0 auto;
}
</style>
