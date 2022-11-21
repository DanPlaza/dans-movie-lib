import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Scroller from '@/components/Scroller.vue'

describe('Scroller component', () => {
  function createWrapper(props = {}) {
    const wrapper = mount(Scroller, {
      props: {
        header: 'My header',
        ...props,
      },
      slots: {
        default: `<div>My first item</div> <div>My second item</div> <div>My third item</div>`,
      },
    })
    return wrapper
  }

  it('should display the transcluded content', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    const scroller = wrapper.find('div.dml-scroller')
    const contentDivs = scroller.findAll('div')
    expect(contentDivs.length).toBe(3)
  })

  it('should have the correct header', () => {
    const wrapper = createWrapper()
    const header = wrapper.find('h3')
    expect(header.html()).toContain('My header')
  })
})