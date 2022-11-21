import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput.vue'
import router from '@/router'

describe('SearchInput component', () => {
  function createWrapper(props = {}) {
    const wrapper = mount(SearchInput, {
      props: {
        ...props,
      },
    })
    return wrapper
  }

  it('should display the component', () => {
    const wrapper = createWrapper()

    const input = wrapper.find('input')
    expect(input.exists()).toBeTruthy()

    const button = wrapper.find('button')
    expect(button.html()).toContain('🔍')
  })

  it('should trigger the navigation event', () => {
    const wrapper = createWrapper()
    vi.spyOn(router, 'push')
    
    const input = wrapper.find('input')
    input.setValue('my query')
    input.trigger('input')
    
    const button = wrapper.find('form')
    button.trigger('submit')

    expect(router.push).toHaveBeenCalledWith({
      path: '/search',
      query: {
        q: 'my query'
      }
    })
  })
})