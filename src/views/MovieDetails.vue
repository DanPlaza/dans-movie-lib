<script setup lang="ts">
import type { MovieImages, MovieInfo } from '@/interfaces/moviedb.interface'
import MovieCard from '@/components/MovieCard.vue'
import Scroller from '@/components/Scroller.vue'
import MovieDBService from '@/services/moviedb.service'
import EventsService from '@/services/events.service'

const props = defineProps<{
  id: number
}>()

const movie: MovieInfo = await MovieDBService.getMovie(props.id)
const movieImages: MovieImages[] = await MovieDBService.getMovieImages(props.id)

const openOverlay = (imageUrl: string) => {
  EventsService.openOverlay(imageUrl)
}
</script>

<template>
  <section class="container dml-movie-details">
    <header>
      <h1>{{ movie.name }}</h1>
    </header>
    <main>
      <MovieCard
        :movie-info="movie"
      />
      <section>
        <h5>Summary:</h5>
        <p v-html="movie.summary || '--'"></p>

        <h5>Rating:</h5>
        <p>{{ movie.rating.average || '--' }}</p>

        <h5>Genres:</h5>
        <p v-if="movie.genres.length"><span class="dml-movie-details__genre" v-for="genre in movie.genres">{{ genre }}</span></p>
        <p v-else>--</p>

        <Scroller v-if="movieImages.length" header="Pictures">
          <a v-for="image in movieImages" :key="image.id" class="dml-pointer" @click="openOverlay(image.resolutions.original.url)">
            <picture v-if="image.resolutions.medium || image.resolutions.original">
              <source :srcset="image.resolutions.medium?.url || ''" type="image/jpg">
              <img :src="image.resolutions.original.url" :alt="`${movie.name} - ${image.type} - ${image.id}`">
            </picture>
          </a>
        </Scroller>
      </section>
    </main>
  </section>
</template>

<style scoped>
.dml-movie-details {
  margin: var(--dml-space-lg) auto;
  padding-left: var(--dml-space-md);
  padding-right: var(--dml-space-md);
}

.dml-movie-details h1 {
  margin-bottom: var(--dml-space-lg);
}

.dml-movie-details main {
  display: grid;
  gap: var(--dml-space-lg);
}

.dml-movie-details main h5 {
  color: var(--dml-color-neutral);
  background-color: var(--dml-color-secondary);
  padding: var(--dml-space-sm) var(--dml-space-md);
  margin-bottom: var(--dml-space-sm);
}

.dml-movie-details main p {
  padding: var(--dml-space-sm) var(--dml-space-md);
  margin-bottom: var(--dml-space-md);
}

.dml-movie-details__genre {
  padding: var(--dml-space-sm);
  margin: var(--dml-space-sm);
  background-color: var(--dml-color-secondary-light);
}

.dml-scroller a, .dml-scroller a img {
  height: 100%;
}
.dml-scroller a img {
  object-fit: cover;
}

@media only screen and (min-width: 600px) {
  .dml-movie-details main {
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr;
  }
}
</style>
