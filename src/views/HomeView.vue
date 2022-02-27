<script setup>
import Header from "./../components/Header.vue";
import SongsList from "./../components/SongsList.vue";
import AddSongForm from "./../components/AddSongForm.vue";
import SongsFilter from "./../components/SongsFilter.vue";
import Model from "./../components/Model.vue";
import SongDetails from "./../components/SongDetails.vue";

import { useSongsStore } from "./../stores/index";

const songsStore = useSongsStore();

import { ref } from "vue";

const showDetails = ref(false);
let details = ref(null);


function handleFilter(value) {
  songsStore.setFilteredKey(value);
  console.log("new filtered key ", songsStore.filteredKey);
}

function handleShowDetails(item) {
  console.log("details ", item);
  details.value = item;
  showDetails.value = true;
}
</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <h2>Add a song</h2>
      <AddSongForm />
      <hr />
      <br />
      <h3>Your songs</h3>
      <SongsFilter @filtered="handleFilter" />
      <SongsList
        :list="songsStore.filteredSongs"
        @show-details="handleShowDetails"
      />
      <Model v-if="showDetails" @close="showDetails = !showDetails">
        <SongDetails :item="details" />
      </Model>
    </div>
  </main>
</template>