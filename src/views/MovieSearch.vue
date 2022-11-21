<script setup lang="ts">
import type { MovieSearchResult } from '@/interfaces/moviedb.interface'
import MovieCard from '@/components/MovieCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import MovieDBService from '@/services/moviedb.service'
import { ref } from 'vue'
import type { Ref } from 'vue'

const props = defineProps<{
  query: string
}>()

const movieResults: Ref<MovieSearchResult[]> = ref(await MovieDBService.searchMovie(props.query))
</script>

<template>
  <section class="container dml-movie-search-results">
    <header>
      <h1>Find a movie!</h1>
    </header>
    <section class="dml-search-info">
      <p>Find the movie you're looking for! Just type a some keywords...</p>
      <p><SearchInput /></p>
    </section>
    <main>
      <MovieCard
        v-for="result in movieResults"
        :key="result.show.id"
        :movie-info="result.show"
      />
    </main>
  </section>
</template>

<style scoped>
.dml-movie-search-results {
  margin: var(--dml-space-lg) auto;
  padding-left: var(--dml-space-md);
  padding-right: var(--dml-space-md);
}

.dml-search-info {
  margin-bottom: var(--dml-space-lg);
  text-align: center;
}

.dml-movie-search-results h1 {
  margin-bottom: var(--dml-space-lg);
}

.dml-movie-search-results main {
  display: grid;
  gap: var(--dml-space-lg);
}

@media only screen and (min-width: 600px) {
  .dml-movie-search-results main {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
  }
}

@media only screen and (min-width: 900px) {
  .dml-movie-search-results main {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
  }
}
</style>
