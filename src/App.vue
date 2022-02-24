<script setup>
import Header from "./components/Header.vue";
import SongsList from "./components/SongsList.vue";
import AddSongForm from "./components/AddSongForm.vue";

import { ref } from "vue";

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
    poster: "",
  },
]);

function onAdded(song) {
  console.log("new song ", song);
  songs.value = [...songs.value, song];
}
</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <h2>Add a song</h2>
      <AddSongForm @added="onAdded" />
      <h3>Your songs</h3>
      <SongsList :list="songs" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
