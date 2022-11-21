import { MovieInfo, MoviesByGenre } from '@/interfaces/moviedb.interface'

/**
 * Groups a list of movies by genre
 * @param moviesList The list of movies to be grouped
 * @returns {MoviesByGenre} The grouped list of movies
 */
const groupByGenre = (moviesList: MovieInfo[]) => {
  return moviesList.reduce((accumulator: MoviesByGenre, current) => {
    current.genres.forEach((genre) => {
      if (genre in accumulator) {
        accumulator[genre].push(current)
      } else {
        accumulator[genre] = [current]
      }
    })
    return accumulator
  }, {})
}

/**
 * Sorts a list of movies based on the average rating
 * @param moviesList The list of movies to be sorted
 * @returns {MovieInfo[]} The sorted array of movies
 */
const sortByRating = (moviesList: MovieInfo[]) => {
  return moviesList.sort((a, b) => {
    return Number(b.rating.average) - Number(a.rating.average)
  })
}

export default {
  groupByGenre,
  sortByRating,
}