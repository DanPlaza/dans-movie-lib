<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import router from '@/router'

const query: Ref<string> = ref('')
const searchMovie = () => {
  router.push({
    path: '/search',
    query: {
      q: query.value
    }
  })
}
</script>

<template>
  <form @submit.prevent="searchMovie()">
    <input
      class="dml-search-input"
      type="search"
      name="find-movie"
      id="find-movie-input"
      placeholder="Looking for a movie?"
      required
      aria-label="Find a movie:"
      v-model="query"
    >
    <button class="dml-search-button" type="submit">&#x1f50d;</button>
  </form>
</template>

<style scoped>
.dml-search-input,
.dml-search-button {
  height: 100%;
  box-shadow: none;
}

.dml-search-input,
.dml-search-input:focus,
.dml-search-button {
  border: var(--dml-color-secondary-light) solid 2px;
  border-radius: 0;
}

.dml-search-button {
  background-color: var(--dml-color-secondary-dark);
  color: var(--dml-color-primary);
  border-left: 1px;
}
</style>
