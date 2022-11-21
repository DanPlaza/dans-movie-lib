import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'
import { movieInfoMock } from '../services/moviedb.service.test-data'

describe('MovieCard component', () => {
  function createWrapper(props = {}) {
    const wrapper = mount(MovieCard, {
      props: {
        movieInfo: movieInfoMock,
        ...props,
      },
    })
    return wrapper
  }

  it('should display the correct header', () => {
    const wrapper = createWrapper()
    const header = wrapper.find('h4')
    expect(header.html()).toContain('Under the Dome')
    expect(header.html()).toContain('(2013)')
  })

  it('should display the correct image', () => {
    const wrapper = createWrapper()
    const imageSource = wrapper.find('source')
    expect(imageSource.attributes()['srcset']).toEqual('https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg')
  })
})