<script setup>
const props = defineProps({
  item: Object,
});
</script>


<template>
  <li>{{ item.title }}</li>
</template>


<style scoped>
li {
  margin: var(--space-4) 0;
  padding: var(--space-3);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>