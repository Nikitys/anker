import { onMounted, onUnmounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import gsap from 'gsap'

export function useCountUp(targetValue, duration = 1.8) {
  const displayValue = ref(0)
  const el = ref(null)
  let triggered = false

  const { stop } = useIntersectionObserver(el, ([entry]) => {
    if (entry.isIntersecting && !triggered) {
      triggered = true
      gsap.to(displayValue, {
        value: targetValue,
        duration,
        ease: 'power2.out',
        snap: { value: 1 }
      })
    }
  }, { threshold: 0.3 })

  onUnmounted(stop)
  return { displayValue, el }
}

export function useReveal() {
  const el = ref(null)
  const isVisible = ref(false)

  const { stop } = useIntersectionObserver(el, ([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
    }
  }, { threshold: 0.1 })

  onUnmounted(stop)
  return { el, isVisible }
}

export function useStaggerReveal(selector, stagger = 0.15) {
  const container = ref(null)

  onMounted(() => {
    if (!container.value) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = container.value.querySelectorAll(selector)
          gsap.fromTo(items,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, stagger, ease: 'power2.out' }
          )
          observer.disconnect()
        }
      })
    }, { threshold: 0.1 })

    observer.observe(container.value)
  })

  return { container }
}
