<script setup lang="ts">
import Card from '@/components/Card.vue'
import type { MovieInfo } from '@/interfaces/moviedb.interface'
import router from '@/router'
import { computed } from '@vue/reactivity'

const props = defineProps<{
  movieInfo: MovieInfo
}>()

const yearMatches = props.movieInfo.premiered?.match(/(\d{4})-\d{2}-\d{2}/)
const premieredYear = yearMatches ? yearMatches[1] : ''

const goToDetails = (movieId: number) => {
  // TODO: Check if route matches the current one to prevent navigation
  router.push(`/movie/${movieId}`)
}

const movieImage = computed(() => {
  return props.movieInfo.image ? (props.movieInfo.image.medium || props.movieInfo.image.original) : ''
})
</script>

<template>
  <Card class="dml-movie-card dml-pointer" background-shade="dark" @click="goToDetails(movieInfo.id)">
    <picture>
      <source :srcset="movieImage" type="image/jpg">
      <img src="@/assets/images/dml-logo.svg" :alt="movieInfo.name">
    </picture>
    <section class="dml-movie-card__info">
      <h4>{{ movieInfo.name }} <span v-if="premieredYear">({{ premieredYear }})</span></h4>
    </section>
  </Card>
</template>

<style scoped>
.dml-movie-card {
  display: flex;
  flex-direction: column;
}

.dml-movie-card img {
  width: 100%;
  margin-bottom: var(--dml-space-sm);
  aspect-ratio: 5 / 7;
}

.dml-movie-card__info h4 {
  color: var(--dml-color-primary);
}
</style>
