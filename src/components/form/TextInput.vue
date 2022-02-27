<script setup>
import { ref } from "vue";
const props = defineProps({
  label: String,
});

const text = ref("");
const emit = defineEmits(["change"]);

function onChange(e) {
  emit("change", e.target.value);
}
</script>

<template>
  <label>
    <span>{{ label }} {{ text }}</span>
    <input type="text" @input="onChange" />
  </label>
</template>


<style scoped>
input {
  display: block;
  width: 100%;
  padding: var(--space-2);
}

span {
  display: block;
}
</style>

