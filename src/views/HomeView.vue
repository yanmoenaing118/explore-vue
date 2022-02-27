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
    <div class="wrapper home">
      <div>
              <h2>Add a song</h2>
      <AddSongForm />
  

      </div>
      <div>
        <h2>Your songs | {{songsStore.filteredSongs.length}}</h2>
        <SongsFilter @filtered="handleFilter" />
      <SongsList
        :list="songsStore.filteredSongs"
        @show-details="handleShowDetails"
      />
      </div>
      <Model v-if="showDetails" @close="showDetails = !showDetails">
        <SongDetails :item="details" />
      </Model>
    </div>
  </main>
</template>

<style scoped>
h2 {
  color: var(--primary);
  text-transform: uppercase;
  font-size: 1.2rem;
}

.home {
  display: flex;
  gap: var(--space-8);
}

.home > div {
  flex: 1;
}

@media screen and (max-width: 680px) {
  .home {
    display: block;
  }
}
</style>