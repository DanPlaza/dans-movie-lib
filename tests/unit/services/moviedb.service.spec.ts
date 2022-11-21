import MovieDBService from '@/services/moviedb.service'
import { describe, it, expect, vi, afterEach } from 'vitest'
import type { MovieImages, MovieInfo } from '@/interfaces/moviedb.interface'
import axios from '@/utils/axios'
import { movieImagesMock, movieInfoMock, movieListMock } from './moviedb.service.test-data'

const setMockResponse = (mockData: any) => {
  vi.spyOn(axios, 'get').mockImplementationOnce(() => {
    return Promise.resolve({
      data: mockData
    })
  })
}

describe('MovieDB Service', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return the movie information', async () => {
    const expectedResponse: MovieInfo = movieInfoMock
    setMockResponse(expectedResponse)
    const movieInfoRes: MovieInfo = await MovieDBService.getMovie(1)

    expect(movieInfoRes).toEqual(expectedResponse)
  })

  it('should return the movie images', async () => {
    const expectedResponse: MovieImages[] = movieImagesMock
    setMockResponse(expectedResponse)
    const movieImagesRes: MovieImages[] = await MovieDBService.getMovieImages(1)

    expect(movieImagesRes).toEqual(expectedResponse)
  })

  it('should return the lists of movies', async () => {
    const expectedResponse: MovieInfo[] = movieListMock
    setMockResponse(expectedResponse)
    const moviesRes: MovieInfo[] = await MovieDBService.getMovies()

    expect(moviesRes).toEqual(expectedResponse)
  })

  it('should return the lists of movies matching the query', async () => {
    const expectedResponse: MovieInfo[] = movieListMock
    setMockResponse(expectedResponse)
    const moviesRes: MovieInfo[] = await MovieDBService.searchMovie('wolves')

    expect(moviesRes).toEqual(expectedResponse)
  })
})