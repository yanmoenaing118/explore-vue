<script setup>
import SongItem from "./SongItem.vue";
const props = defineProps({
    list: Array
})

const emit = defineEmits(["show-details"])
function handleShowDetails(song) {
    emit("show-details", song)
}

</script>


<template>
    <ul>
        <SongItem v-for="song in list" :key="song.id" :item="song" @show-details="() => handleShowDetails(song)" />
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
}

</style>