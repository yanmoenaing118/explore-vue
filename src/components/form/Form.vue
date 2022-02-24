<script setup>
import TextInput from "./TextInput.vue";
import Select from "./Selector.vue";
import {  reactive, ref } from "vue";

const props = defineProps({
  inputs: Array,
});

const options = [
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

const formData = ref({
    title: "",
    poster: "",
    src: "",
    country: ""
})

const emit = defineEmits(['submit'])

function onChange(key,value) {
    formData.value = {...formData.value, [key]:value}
}

function handleSubmit() {
    console.log(formData.value);
    emit('submit', formData.value)
}



</script>


<template>
  <section>
    <form>
      <div v-for="(input) in inputs" :key="input.id"> 
        <TextInput :label="input.label" :value="input.value" @change="(value) => onChange(input.key, value)" />
      </div>
      <div><Select :options="options" @changed="(value) => onChange('country', value)" label="Choose country"/></div>
      <button type="submit" @click.prevent="handleSubmit">Submit</button>
    </form>
  </section>
</template>


<style scoped>
section {
  padding: var(--space-8) 0;
}

button {
  margin-top: var(--space-7);
  border: none;
  background: none;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--gray-300);
}

div {
  margin-bottom: var(--space-4);
}
</style>