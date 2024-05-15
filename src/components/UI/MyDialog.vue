<template>
  <div class="dialog" v-if="props.modelValue" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const name = ref("my-dialog");
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
});

const hideDialog = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 1;

  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    padding: 20px;
    min-height: 50px;
    min-width: 300px;
  }
}
</style>
