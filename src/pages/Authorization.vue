<template>
  <div class="container">
    <form @submit.prevent>
      <div v-if="weatherStore.visibleGoIn">
        <h1>Вход в аккаунт</h1>
        <my-input class="input" placeholder="Имя" v-model="userName"></my-input>
        <my-input
          class="input"
          placeholder="Фамилия"
          v-model="userSurname"
        ></my-input>
        <div>
          <my-button class="btn" @click="hideDays">Войти</my-button>
          <my-button class="btn" @click="hideFormRegistration"
            >Зарегистрироваться</my-button
          >
          <my-button class="btn" @click="back">Назад</my-button>
        </div>
      </div>
      <div v-else-if="weatherStore.visibleRegistration">
        <h1>Регистрация</h1>
        <my-input class="input" placeholder="Имя" v-model="userName"></my-input>
        <my-input
          class="input"
          placeholder="Фамилия"
          v-model="userSurname"
        ></my-input>
        <div>
          <my-button @click="setUser">Зарегистрироваться</my-button>
          <my-button @click="back">Назад</my-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useWeather } from "@/store/homePageStore.js";
import { useRouter } from "vue-router";
import { ref, defineProps } from "vue";

const userName = ref("");
const userSurname = ref("");
const user = ref("");

const router = useRouter();
const weatherStore = useWeather();

const props = defineProps({
  goIn: Boolean,
  default: false,
  registration: Boolean,
  default: false,
});

const setUser = () => {
  user.value = `${userName.value} ${userSurname.value}`;

  if (weatherStore.users.includes(user.value)) {
    alert("Данный пользователь уже зарегистрировал");
    return;
  }

  weatherStore.users.push(user.value);
  userName.value = "";
  userSurname.value = "";
  router.push("/");
  weatherStore.hideFiveDays;
};

const hideDays = () => {
  user.value = `${userName.value} ${userSurname.value}`;

  if (weatherStore.users.includes(user.value)) {
    router.push("/");
    weatherStore.hideFiveDays;
  } else {
    alert("Данный пользователь не зарегистрирован");
  }
};

const hideFormRegistration = () => {
  weatherStore.visibleGoIn = false;
  weatherStore.visibleRegistration = true;
};

const back = () => {
  router.push("/");
  weatherStore.visibleGoIn = false;
  weatherStore.visibleRegistration = false;
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  font-family: Arial;
  display: flex;
  justify-content: center;

  .input {
    margin-top: 10px;
    border: 2px solid var(--primary);
  }

  .btn {
    margin: 10px 0 0 5px;
    border: 2px solid var(--primary);
  }

  form {
    width: 300px;
    text-align: center;
  }
}
</style>
