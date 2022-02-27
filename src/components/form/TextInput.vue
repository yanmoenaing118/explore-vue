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
  padding: var(--space-5) var(--space-3);
  border: 1px solid var(--gray-400);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--secondary);

}

span {
  display: block;
}
</style>

