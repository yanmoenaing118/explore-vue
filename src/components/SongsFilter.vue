<script setup>
import Select from "./form/Selector.vue";
import { useSongsStore } from "../stores";

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
const songsStore = useSongsStore();

const emit = defineEmits(["filtered"])
function handleChange(value) {
    songsStore.setFilteredKey(value);
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