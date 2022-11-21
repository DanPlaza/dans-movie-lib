import axios from '@/utils/axios'
import type { AxiosResponse } from 'axios'
import type { MovieImages, MovieInfo, MovieSearchResult } from '@/interfaces/moviedb.interface'


/**
 * Retrieves the information about a movie based on its ID
 * @param {number} movieId The ID of the required movie
 * @returns {Promise<MovieInfo>} The movie information
 */
 async function getMovie(movieId: number): Promise<MovieInfo> {
  const response: AxiosResponse<MovieInfo> = await axios.get(`/shows/${movieId}`)
  return response.data
}

/**
 * Retrieves the list of images for a given movies based on its ID
 * @param {number} movieId The ID of the movie
 * @returns {Promise<MovieImages[]>} The list of images requested
 */
async function getMovieImages(movieId: number): Promise<MovieImages[]> {
  const response: AxiosResponse<MovieImages[]> = await axios.get(`/shows/${movieId}/images`)
  return response.data
}

/**
 * Retrieves the list of movies for a given page number
 * @param {number} page Page number to be retrieved
 * @returns {Promise<MovieInfo[]>} The list of 250 movies information of the given page number 
 */
async function getMovies(page: number = 1): Promise<MovieInfo[]> {
  const params = new URLSearchParams()
  params.append('page', String(page))
  const response: AxiosResponse<MovieInfo[]> = await axios.get('/shows', { params })
  return response.data
}

/**
 * Retrieves a list of movies that match a given query string
 * @param {string} queryText The text to search for
 * @returns {Promise<MovieSearchResult[]>} The list of movies that match the text
 */
async function searchMovie(queryText: string): Promise<MovieSearchResult[]> {
  const params = new URLSearchParams()
  params.append('q', queryText)
  const response: AxiosResponse<MovieSearchResult[]> = await axios.get('/search/shows', { params })
  return response.data
}

export default {
  getMovie,
  getMovieImages,
  getMovies,
  searchMovie,
}
