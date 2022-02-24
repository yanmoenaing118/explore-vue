<script setup>
import Header from "./components/Header.vue";
import SongsList from "./components/SongsList.vue";
import AddSongForm from "./components/AddSongForm.vue";
import SongsFilter from "./components/SongsFilter.vue";
import Model from "./components/Model.vue";
import SongDetails from "./components/SongDetails.vue";


import { computed, reactive, ref } from "vue";

const sourceUrl = "https://myplaylist.vercel.app/";
let songId = 0;
const songs = ref([
  {
    id: songId++,
    title: "Pian Pian",
    poster: sourceUrl + "static/media/elod.852037c1.png",
    src: sourceUrl + 'static/media/elod.d2eebfc8.mp3',
    country: "ch",
  },

]);
const filterKey = ref('all');
const filteredSongs = computed(() => {
  return filterKey.value === "all"  ? songs.value:  songs.value.filter(item => item.country === filterKey.value);
});
const showDetails = ref(false);
let details = ref(null)

function handleAdded(song) {
  console.log("new song ", song);
  songs.value = [...songs.value, song];
}

function handleFilter(value) {
  filterKey.value = value;
}

function handleShowDetails(item) {
  console.log('details ', item);
  details.value = item;
  showDetails.value = true;
}

</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <h2>Add a song</h2>
      <AddSongForm @added="handleAdded" />
      <hr /><br />
      <h3>Your songs</h3>
      <SongsFilter @filtered="handleFilter" />
      <SongsList :list="filteredSongs" @show-details="handleShowDetails" />
      <Model v-if="showDetails" @close="showDetails = !showDetails">
        <SongDetails />
      </Model>
    </div>

  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
