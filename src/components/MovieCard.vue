<script setup lang="ts">
import Card from '@/components/Card.vue'
import type { MovieInfo } from '@/interfaces/moviedb.interface'
import router from '@/router'

const props = defineProps<{
  movieInfo: MovieInfo
}>()

const yearMatches = props.movieInfo.premiered?.match(/(\d{4})-\d{2}-\d{2}/)
const premieredYear = yearMatches ? yearMatches[1] : ''

const goToDetails = (movieId: number) => {
  router.push(`/movie/${movieId}`)
}
</script>

<template>
  <Card class="dml-movie-card" background-shade="dark" @click="goToDetails(movieInfo.id)">
    <img :src="movieInfo.image.medium" :alt="movieInfo.name">
    <section class="dml-movie-card__info">
      <h4>{{ movieInfo.name }} <span v-if="premieredYear">({{ premieredYear }})</span></h4>
    </section>
  </Card>
</template>

<style scoped>
.dml-movie-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.dml-movie-card img {
  width: 100%;
  margin-bottom: var(--dml-space-sm);
}

.dml-movie-card__info h4 {
  color: var(--dml-color-primary);
}
</style>
