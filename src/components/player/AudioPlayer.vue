<script setup>
const props = defineProps({
  src: String,
});
</script>
<template>
  <div class="progress"></div>
  <audio
    @timeupdate="(e) => $emit('timeupdate', e)"
    :src="src"
    controls
    preload="metadata"
    autoplay
  ></audio>
</template>