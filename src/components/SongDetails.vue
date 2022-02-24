<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { fetchSubtitle, createSubtitle } from "../lib";

const props = defineProps({
  item: Object,
});
const subArr = ref([]);
const audioRef = ref(null);
const lyric = ref("");

onMounted(() => {
  fetchSubtitle(props.item.subtitle)
    .then((subtitleText) => createSubtitle(subtitleText))
    .then((sub) => {
      subArr.value = sub;
    });
  audioRef.value.addEventListener("timeupdate", onAudioTimeUpdate);
});

function onAudioTimeUpdate(e) {
  subArr.value.forEach((el, idx) => {
    if (
      e.target.currentTime * 1000 >= el.start &&
      e.target.currentTime * 1000 <= el.end
    ) {
      lyric.value = subArr.value[idx].part;
    }
  });
}
</script>


<template>
  <div>
    <div class="figure">
      <img :src="item.poster" :alt="item.title" />
    </div>
    <p class="lyric">{{ lyric }}</p>
    <p>Song title : <em>{{ item.title }}</em></p>
    <div>
      <audio ref="audioRef" :src="item.src" controls preload="metadata"></audio>
    </div>
  </div>
</template>

<style scoped>
.figure {
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: var(--gray-400);
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.lyric {
    color: var(--primary);
    font-style: italic;
    font-weight: bold;
    padding: var(--space-6) var(--space-4);
    letter-spacing: 1px;
}

p {
  padding: var(--space-3);
}
</style>

