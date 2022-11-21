import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TopBar from '@/components/TopBar.vue'

describe('TopBar component', () => {
  function createWrapper(props = {}) {
    const wrapper = mount(TopBar, {
      props: {
        ...props,
      },
      global: {
        stubs: ['router-link']
      }
    })
    return wrapper
  }

  it('should display the logo', () => {
    const wrapper = createWrapper()
    const topBar = wrapper.find('nav')
    expect(topBar).toBeTruthy()
  })
})