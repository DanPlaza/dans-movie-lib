import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card component', () => {
  function createWrapper(props = {}) {
    const wrapper = mount(Card, {
      props: {
        ...props,
      },
      slots: {
        default: 'I have content',
      },
    })
    return wrapper
  }

  it('should display the transcluded content', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    expect(wrapper.html()).toContain('I have content')
  })

  it('should have the "dark" and "darker" class assigned', () => {
    let wrapper = createWrapper({
      backgroundShade: 'dark',
    })
    expect(wrapper.classes()).toContain('dml-card__dark')

    wrapper = createWrapper({
      backgroundShade: 'darker',
    })
    expect(wrapper.classes()).toContain('dml-card__darker')
  })
})