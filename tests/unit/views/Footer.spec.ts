import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer component', () => {
  function createWrapper(props = {}) {
    const wrapper = mount(Footer, {
      props: {
        ...props,
      }
    })
    return wrapper
  }

  it('should display the copyright text', () => {
    const wrapper = createWrapper()
    const footer = wrapper.find('footer')
    expect(footer).toBeTruthy()
    expect(footer.html()).toContain('© Dan Plaza 2022-2022')
  })
})