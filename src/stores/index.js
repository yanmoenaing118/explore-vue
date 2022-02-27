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
          title: "Pian Pian",
          poster: sourceUrl + "static/media/elod.852037c1.png",
          src: sourceUrl + "static/media/elod.d2eebfc8.mp3",
          subtitle: sourceUrl + "static/media/elod.defe39dc.vtt",
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
