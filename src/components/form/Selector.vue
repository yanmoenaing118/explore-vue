<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  options: Array,
});
const emit = defineEmits(["changed"]);

const selected = ref("all");

function handleSelected(e) {
  emit("changed", e.target.value);
}
</script>


<template>
  <label>
    <select @change="handleSelected">
      <option v-for="opt in options" :key="opt" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </label>
</template>