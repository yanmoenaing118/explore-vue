<script setup>
import SongItem from "./SongItem.vue";
const props = defineProps({
    list: Array
})
</script>

<template>
    <ul>
        <SongItem v-for="song in list" :key="song.id" :item="song" />
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
}

</style>