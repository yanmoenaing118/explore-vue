<script setup>
import Select from "./form/Selector.vue";

const options = [
    {
    label: "All",
    value: "all",
  },
  {
    label: "Korean",
    value: "kr",
  },
  {
    label: "Japanese",
    value: "jp",
  },
  {
    label: "Chinese",
    value: "ch",
  },
];

const emit = defineEmits(["filtered"])
function handleChange(value) {
    emit("filtered", value);
}
</script>

<template>
  <div class="songsFilter">
    <Select :options="options" @changed="handleChange"/>
  </div>
</template>


<style scoped>
.songsFilter {
    display: flex;
    justify-content: flex-end;
}
</style>