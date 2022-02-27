<script setup>
import { ref } from "@vue/reactivity";
import Form from "./form/Form.vue";
import { useSongsStore } from "./../stores";

const inputs = [
  {
    label: "Title",
    id: 1,
    key: "title",
  },
  {
    label: "Poster",
    id: 2,
    key: "poster",
  },
  {
    label: "Src",
    id: 3,
    key: "src",
  },
  {
    label: "Subtitle",
    id: 4,
    key: "subtitle",
  },
];

const songsStore = useSongsStore();

function handleSubmit(value) {
  songsStore.addSong(value);
}
</script>

<template>
  <div>
    <Form :inputs="inputs" @submit="handleSubmit" />
  </div>
</template>

<style scoped>
</style>