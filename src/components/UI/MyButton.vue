<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue";

const name = ref("my-button");
</script>

<style>
.btn {
  border: none;
  padding: 10px;
  border-radius: 10px;
  background: var(--color-white);
  transition: background-color 0.3s ease-in-out;
  opacity: 0.9;
}

.btn:hover {
  color: var(--color-white);
  background-color: #9a9aff;
}
</style>
