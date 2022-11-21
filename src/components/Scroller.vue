<script setup lang="ts">
import Card from '@/components/Card.vue'
defineProps<{
  header: string
}>()
</script>

<template>
  <Card background-shade="darker">
    <h3>{{ header }}</h3>
    <div class="dml-scroller">
      <slot></slot>
    </div>
  </Card>
</template>

<style scoped>
h3 {
  color: var(--dml-color-primary);
  margin-bottom: var(--dml-space-md);
  font-weight: 600;
}

.dml-scroller {
  display: grid;
  gap: var(--dml-space-sm);
  grid-auto-flow: column;
  grid-auto-columns: 30%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}

.dml-scroller > * {
  padding: var(--dml-space-sm);
  max-height: 100%;
  scroll-snap-type: mandatory;
}

.dml-scroller-list > * img {
  max-width: 100%;
  inline-size: 100%;
  aspect-ratio: 5 / 7;
  object-fit: cover;
}
</style>
