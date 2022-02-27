<script setup>
import { ref } from "vue";
const props = defineProps({
  label: String,
  is_valid: String
});

const text = ref("");
const emit = defineEmits(["change"]);

function onChange(e) {
  emit("change", e.target.value);
}
</script>

<template>
  <label>
    <span>{{ label }} {{ is_valid }}</span>
    <input type="text" @input="onChange" />
  </label>
</template>


<style scoped>
input {
  display: block;
  width: 100%;
  padding: var(--space-4) var(--space-2);

}

span {
  display: block;
}
</style>

