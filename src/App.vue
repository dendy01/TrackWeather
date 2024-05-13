<template>
  <div class="wrapper">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss">
.wrapper {
  padding: 20px 0 20px 0;
  font-family: Arial;
}

@media (max-width: 500px) {
  .wrapper {
    padding: 0;
  }
}
</style>
