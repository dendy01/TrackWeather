<template>
  <input
    type="text"
    class="input"
    @input="updateInput"
    :value="props.modelValue"
  />
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const name = ref("my-input");

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: [String, Number],
  default: [String, Number],
});

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
.input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  opacity: 0.9;
}
</style>
