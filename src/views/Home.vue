<script setup lang="ts">
import type { MovieInfo } from '@/interfaces/moviedb.interface'
import MovieCard from '@/components/MovieCard.vue'
import Scroller from '@/components/Scroller.vue'
import MovieDBService from '@/services/moviedb.service'
import DataProcessingHelper from '@/utils/data-processing'

const movies: MovieInfo[] = await MovieDBService.getMovies()
const moviesByGenre = DataProcessingHelper.groupByGenre(movies)

// Sorting the lists by rating
for (let genre in moviesByGenre) {
  moviesByGenre[genre] = DataProcessingHelper.sortByRating(moviesByGenre[genre])
}
</script>

<template>
  <section class="container dml-home">
    <header>
      <h1>Dan's Movie Library</h1>
    </header>
    <main>
      <Scroller
        class="dml-genre"
        v-for="(movieList, genre) in moviesByGenre"
        :header="genre as string"
      >
        <MovieCard
          v-for="movie in movieList"
          :key="movie.id"
          :movie-info="movie"
        />
      </Scroller>
    </main>
  </section>
</template>

<style scoped>
.dml-home {
  margin-top: var(--dml-space-lg);
  padding-left: var(--dml-space-md);
  padding-right: var(--dml-space-md);
}

h1 {
  margin-bottom: var(--dml-space-lg);
}

.dml-genre {
  margin-bottom: var(--dml-space-lg);
}
</style>
