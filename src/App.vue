<script setup>
import Header from "./components/Header.vue";
import SongsList from "./components/SongsList.vue";
import AddSongForm from "./components/AddSongForm.vue";
import SongsFilter from "./components/SongsFilter.vue";


import { computed, ref } from "vue";

let songId = 0;
const songs = ref([
  {
    id: songId++,
    title: "Done for me",
    poster: "",
    type: "kr",
  },
  {
    id: songId++,
    title: "Me and only you",
    poster: "",
    type: "kr",
  },
  {
    id: songId++,
    title: "Love silk girls",
    poster: "",
    type: "jp",
  },
  {
    id: songId++,
    title: "Like Water",
    type: "kr",
  },
  {
    id: songId++,
    title: "Water glass",
    type: "ch",
  },
]);

const filterKey = ref('all');

const filteredSongs = computed(() => {
  return filterKey.value === "all"  ? songs.value:  songs.value.filter(item => item.type === filterKey.value);
})

function onAdded(song) {
  console.log("new song ", song);
  songs.value = [...songs.value, song];
}

function handleFilter(value) {
  filterKey.value = value;
}
</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <h2>Add a song</h2>
      <AddSongForm @added="onAdded" />
      
      <h3>Your songs</h3>
      <SongsFilter @filtered="handleFilter" />
      <SongsList :list="filteredSongs" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
