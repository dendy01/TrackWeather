<template>
  <div class="nav">
    <h3>Войдите или зарегистрируйтесь чтобы увидеть прогноз на 5 дней</h3>
    <div>
      <my-button
        style="margin-right: 10px"
        @click="$router.push('/Authorization')"
        >Войти</my-button
      >
      <my-button @click="$router.push('/Registration')"
        >Зарегистрироваться</my-button
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
  padding: 10px 50px 10px 50px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
}
</style>
