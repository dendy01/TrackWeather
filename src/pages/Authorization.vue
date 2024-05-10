<template>
  <form @submit.prevent>
    <div v-if="weatherStore.visibleGoIn">
      <h1>Вход в аккаунт</h1>
      <my-input class="input" placeholder="Имя" v-model="userName" />
      <my-input class="input" placeholder="Фамилия" v-model="userSurname" />
      <div>
        <my-button class="btn" @click="visibleDays">Войти</my-button>
        <my-button class="btn" @click="visibleFormRegistration"
          >Зарегистрироваться</my-button
        >
      </div>
    </div>
    <div v-else-if="weatherStore.visibleRegistration">
      <h1>Регистрация</h1>
      <my-input class="input" placeholder="Имя" v-model="userName" />
      <my-input class="input" placeholder="Фамилия" v-model="userSurname" />
      <div>
        <my-button class="btn" @click="visibleFormGoIn">Войти</my-button>
        <my-button @click="setUser">Зарегистрироваться</my-button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useWeather } from "@/store/homePageStore.js";
import { ref, defineProps, defineEmits } from "vue";

const userName = ref("");
const userSurname = ref("");
const user = ref("");
const weatherStore = useWeather();

const emit = defineEmits(["hide"]);

const props = defineProps({
  goIn: {
    type: Boolean,
    default: false,
  },
  registration: {
    type: Boolean,
    default: false,
  },
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
  weatherStore.visibleFiveDays = true;
  emit("hide");
};

const visibleDays = () => {
  user.value = `${userName.value} ${userSurname.value}`;

  if (weatherStore.users.includes(user.value)) {
    weatherStore.visibleFiveDays = true;
    emit("hide");
  } else {
    alert("Данный пользователь не зарегистрирован");
  }
};

const visibleFormRegistration = () => {
  weatherStore.visibleGoIn = false;
  weatherStore.visibleRegistration = true;
};

const visibleFormGoIn = () => {
  weatherStore.visibleGoIn = true;
  weatherStore.visibleRegistration = false;
};
</script>

<style lang="scss" scoped>
form {
  width: 300px;
  text-align: center;

  .input {
    margin-top: 10px;
    border: 2px solid var(--primary);
  }

  .btn {
    margin: 10px 0 0 5px;
    border: 2px solid var(--primary);
  }
}
</style>
