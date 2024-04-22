import { describe, it, expect, beforeEach } from 'vitest'

import { VueWrapper, mount } from '@vue/test-utils'
import AppLayout from '../AppLayout.vue'

const TEST_MSG = 'I like to Complane'

describe('AppLayout', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(AppLayout, { props: { msg: TEST_MSG } })
  })

  it('renders', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the msg property', () => {
    expect(wrapper.text()).toContain(TEST_MSG)
  })
})
