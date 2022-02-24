<script setup>
import { ref } from "@vue/reactivity";
import Form from "./form/Form.vue";

const inputs = ref([
  {
    label: "Title",
    id: 1,
    key: "title",
  },
  {
    label: "Poster",
    id: 2,
    key: "poster"
  },
  {
    label: "Src",
    id: 3,
    key: "src"
  },
]);



const emit = defineEmits(['added']);

function handleSubmit(value) {
    emit('added', value);
}



</script>

<template>
  <div>
    <Form :inputs="inputs" @submit="handleSubmit"/>
  </div>
</template>

<style scoped>
</style>