<script setup>
import { ref} from "vue";
const props = defineProps({
    src: String
})

const audioRef = ref(null);


</script>
<template>
<div class="progress"></div>
    <audio ref="audioRef" @timeupdate="e => $emit('timeupdate', e)" :src="src" controls preload="metadata"></audio>
</template>