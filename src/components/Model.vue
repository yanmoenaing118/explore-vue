<script setup>
import { onMounted, onUnmounted } from "@vue/runtime-core";

const emit = defineEmits(["close"]);

onMounted(() => {
  window.addEventListener("keydown", handleEscape)  
})

onUnmounted(() => window.removeEventListener("keydown", handleEscape));

function handleEscape(e) {
  console.log(e.key);
  return e.keyCode === 27 ? handleClose() : "";
}


function handleClose() {
    emit("close");
}



</script>


<template>
  <div class="model">
    <div class="backdrop"></div>
    <button @click="handleClose">Close</button>
    <div class="model-content">
      
      <slot />
    </div>
  </div>
</template>

<style scoped>
.model {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.model-content {
    width: 90%;
    max-width: 680px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
}

button {
    position: absolute;
    top: var(--space-8);
    right: var(--space-8);
    padding: var(--space-4);
}


</style>