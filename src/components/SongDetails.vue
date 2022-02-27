<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { fetchSubtitle, createSubtitle } from "../lib";
import AudioPlayer from "./player/AudioPlayer.vue";

const props = defineProps({
  item: Object,
});
const subArr = ref([]);
const audioRef = ref(null);
const lyric = ref("");
const showImg = ref(false);

onMounted(() => {
  fetchSubtitle(props.item.subtitle)
    .then((subtitleText) => createSubtitle(subtitleText))
    .then((sub) => {
      subArr.value = sub;
    });
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
      <div v-if="!showImg" class="bouncing">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img
        :class="{ loaded: showImg }"
        :src="item.poster"
        :alt="item.title"
        @load="showImg = !showImg"
      />
      <p v-if="lyric !== ''" class="lyric">{{ lyric }}</p>
    </div>

    <p>
      Song Title : <strong>{{ item.title }}</strong>
    </p>
    <div>
      <AudioPlayer :src="item.src" @timeupdate="onAudioTimeUpdate" />
      <!-- <audio ref="audioRef" :src="item.src" controls preload="metadata"></audio> -->
    </div>
  </div>
</template>

<style scoped>
.figure {
  width: 100%;
  height: 60vh;
  overflow: hidden;
  background-color: var(--gray-200);
  position: relative;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease-out;
}

img.loaded {
  opacity: 1;
  transform: scale(1);
}

.figure::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(147, 255, 125);
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0.7) 20%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 100%
  );
}

.lyric {
  color: lightgreen;
  font-style: italic;
  font-weight: bold;
  padding: var(--space-6) var(--space-4);
  font-size: 16px;
  letter-spacing: 1px;
  z-index: 10;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  /* background-color: #fff; */
  padding: var(--space-3);
}

p {
  padding: var(--space-7);
}

strong {
  color: var(--secondary);
}



.bouncing {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
}

.bouncing > div {
  margin: 0.1em;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--primary);

  animation-name: animateBounce;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.bouncing > div:nth-child(2) {
  animation-delay: 0.1s;
}

.bouncing > div:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes animateBounce {
  100% {
    opacity: 0.6;
    transform: translateY(-15px);
  }
}
</style>

