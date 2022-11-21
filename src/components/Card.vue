<script setup lang="ts">
defineProps<{
  backgroundShade?: 'dark' | 'darker'
}>()
</script>

<template>
  <div class="dml-card" :class="{ 'dml-card__dark': backgroundShade === 'dark', 'dml-card__darker': backgroundShade === 'darker' }">
    <slot></slot>
  </div>
</template>

<style scoped>
.dml-card {
  border: 2px solid var(--dml-color-secondary-dark);
  padding: var(--dml-space-md);
}

.dml-card__dark {
  background-color: var(--dml-color-secondary);
}

.dml-card__darker {
  background-color: var(--dml-color-secondary-dark);
}
</style>
