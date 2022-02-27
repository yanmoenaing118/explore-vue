import { defineStore } from "pinia";
import { fakeApiCallDelay } from "../lib";

const sourceUrl = "https://myplaylist.vercel.app/";
let songId = 0;

export const useSongsStore = defineStore("songs", {
  state: () => {
    return {
      songs: [
        {
          id: songId++,
          title: "Done for me",
          poster: sourceUrl + "static/media/hotel_deluna.5d28b181.jpg",
          src: sourceUrl + "static/media/done_for_me.2b93e9d0.mp3",
          subtitle: sourceUrl + "static/media/done_for_me.2d83e900.vtt",
          country: "kr",
        },
        {
          id: songId++,
          title: "General's Lady",
          poster: sourceUrl + "static/media/general_lady.b2cdd923.png",
          src: sourceUrl + "static/media/for_one_person.20cab8c7.mp3",
          subtitle: sourceUrl + "static/media/for_one_person.5ecb8399.vtt",
          country: "ch",
        },
      ],
      filteredKey: "all",
    };
  },

  getters: {
    filteredSongs: (state) =>
      state.filteredKey === "all"
        ? state.songs
        : state.songs.filter((item) => item.country === state.filteredKey),
  },

  actions: {
    async addSong(song) {
      await fakeApiCallDelay(1000);
      this.songs.push({
        ...song,
        poster: sourceUrl + song.poster,
        src: sourceUrl + song.src,
        subtitle: sourceUrl + song.subtitle,
        id: songId++,
      });
    },

    setFilteredKey(key) {
      this.filteredKey = key;
    },
  },
});

export const useCounterStore = defineStore("counterStore", {
  state: () => {
    return {
      count: 1,
    };
  },

  getters: {
    doubleCount: (state) => state.count * 2,
    tripleCount: (state) => state.count * 3,
    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
    incrementBy: (state) => {
      return (amount) => state.count + amount;
    },
  },
});
