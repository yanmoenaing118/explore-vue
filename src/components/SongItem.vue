<script setup>
const props = defineProps({
  item: Object,
});

const emit = defineEmits(["show-details"]);

</script>


<template>
  <li @click="emit('show-details')">{{ item.title }}</li>
</template>


<style scoped>
li {
  margin: var(--space-4) 0;
  padding: var(--space-4);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s ease-out;
}

li:hover {
  transform: translateY(-1px);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

li:active {
  transform: scale(1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
}
</style>