<script setup>
import TextInput from "./TextInput.vue";
import Select from "./Selector.vue";
import { ref } from "vue";
import { getFileExtension } from "../../lib";

const props = defineProps({
  inputs: Array,
  loading: Boolean,
});

const emit = defineEmits(["submit"]);
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
  subtitle: "",
  country: "",
});

const validInputs = ref({
  poster: "",
  src: "",
  subtitle: "",
});

const disabled = ref(true);

function onChange(key, value) {
  if (value.trim() === "") {
    formData.value = { ...formData.value, [key]: value.trim() };
    return;
  }
  const isValid = checkInput(key, value);
  validInputs.value = {
    ...validInputs.value,
    [key]: isValid ? "is valid" : "is not valid",
  };
  if (!isValid) return;
  formData.value = { ...formData.value, [key]: value };
  const isValidForm = checkValidFormData(formData.value);
  if (isValidForm) {
    disabled.value = false;
  } else {
    disabled.value = true;
  }
}

function handleSubmit() {
  emit("submit", formData.value);
}

function checkValidFormData(form) {
  const { title, poster, src, subtitle, country } = form;
  if (
    title.trim() === "" ||
    poster.trim() === "" ||
    src.trim() === "" ||
    subtitle.trim() === "" ||
    country.trim() === ""
  ) {
    return false;
  }

  return true;
}

function checkInput(key, value) {
  switch (key) {
    case "poster":
      return checkValidPoster(value);
    case "src":
      return checkValidSrc(value);
    case "subtitle":
      return checkValidVTTFile(value);
    default:
      return true;
  }
}

function checkValidPoster(value) {
  const ext = getFileExtension(value);
  return ext === "jpg" || ext === "png" || ext === "jpeg";
}

function checkValidSrc(value) {
  const ext = getFileExtension(value);
  return ext === "mp3";
}

function checkValidVTTFile(value) {
  const ext = getFileExtension(value);
  return ext === "vtt";
}
</script>


<template>
  <section>
    <form>
      <div v-for="input in inputs" :key="input.id">
        <TextInput
          :label="input.label"
          :is_valid="validInputs[input.key]"
          @change="(value) => onChange(input.key, value)"
        />
      </div>
      <div>
        <Select
          :options="options"
          @changed="(value) => onChange('country', value)"
          label="Choose country"
        />
      </div>
      <button type="submit" @click.prevent="handleSubmit" :disabled="disabled">
        {{ loading ? "Loading" : "Submit" }}
      </button>
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
  cursor: pointer;
  background-color: var(--primary);
  color: #fff;
  transition: all 0.3s ease;
}

button:disabled {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.1);
  cursor: not-allowed;
}

div {
  margin-bottom: var(--space-4);
}
</style>