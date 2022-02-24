<script setup>
import { ref } from "vue";
const props = defineProps({
    label: String
})



const text = ref("")

const emit = defineEmits(['change'])

function onChange(e) {
    text.value = e.target.value;
    emit('change', text.value);
    
}


</script>

<template>
    <label>
        <span>{{label}} {{text}}</span>
        <input type="text" :value="text" @input="onChange">
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

