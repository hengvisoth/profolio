import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import NavigationBar from '@/components/NavigationBar.vue'

vi.mock('gsap', () => ({
  gsap: {
    registerPlugin: vi.fn(),
    to: vi.fn()
  }
}))

vi.mock('gsap/ScrollToPlugin', () => ({
  ScrollToPlugin: {}
}))

const mockMatchMedia = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }))
  })
}

const mockAnimationFrame = () => {
  Object.defineProperty(window, 'requestAnimationFrame', {
    configurable: true,
    value: (callback: (time: number) => void) => {
      callback(0)
      return 1
    }
  })

  Object.defineProperty(window, 'cancelAnimationFrame', {
    configurable: true,
    value: vi.fn()
  })
}

const setLayoutMetrics = () => {
  Object.defineProperty(window, 'innerHeight', {
    configurable: true,
    value: 1000
  })

  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value: 0,
    writable: true
  })

  Object.defineProperty(document.body, 'offsetHeight', {
    configurable: true,
    value: 2000
  })
}

const createSection = (id: string, top: number) => {
  const section = document.createElement('section')
  section.id = id
  section.getBoundingClientRect = () => ({
    top,
    bottom: top + 200,
    left: 0,
    right: 0,
    width: 0,
    height: 200,
    x: 0,
    y: top,
    toJSON: () => ({})
  })
  document.body.appendChild(section)
  return section
}

describe('NavigationBar', () => {
  beforeEach(() => {
    mockMatchMedia()
    mockAnimationFrame()
    setLayoutMetrics()
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('updates the active section after sections appear in the DOM', async () => {
    const wrapper = mount(NavigationBar, {
      attachTo: document.body,
      global: {
        stubs: {
          Icon: true
        }
      }
    })

    await nextTick()

    createSection('home', -200)
    createSection('about', 100)
    createSection('skills', 600)
    createSection('experience', 1200)
    createSection('contact', 1800)

    window.dispatchEvent(new Event('scroll'))
    await nextTick()

    const activeLabel = wrapper.find('.ios-nav__button--active .ios-nav__label')
    expect(activeLabel.exists()).toBe(true)
    expect(activeLabel.text()).toBe('About')

    wrapper.unmount()
  })
})
