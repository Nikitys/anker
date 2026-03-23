<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import gsap from 'gsap'
import { stats } from '../data/products'

const container = ref(null)
const values = ref(stats.map(() => 0))
let triggered = false

onMounted(() => {
  const { stop } = useIntersectionObserver(container, ([entry]) => {
    if (entry.isIntersecting && !triggered) {
      triggered = true
      stats.forEach((stat, i) => {
        gsap.to(values.value, {
          [i]: stat.value,
          duration: 1.8,
          ease: 'power2.out',
          snap: { [i]: 1 },
          onUpdate: () => { values.value = [...values.value] }
        })
      })
    }
  }, { threshold: 0.3 })
})

function formatNumber(n) {
  return n.toLocaleString('ru-RU')
}
</script>

<template>
  <section class="counters" ref="container">
    <div class="container">
      <div class="counters-grid">
        <div v-for="(stat, i) in stats" :key="i" class="counter-item">
          <span class="counter-value">{{ formatNumber(values[i]) }}{{ stat.suffix }}</span>
          <span class="counter-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.counters {
  background: var(--color-primary);
  padding: 48px 0;
}
.counters-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}
.counter-value {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--color-accent);
  margin-bottom: 4px;
}
.counter-label {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
}
@media (max-width: 768px) {
  .counters-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .counter-value { font-size: 1.6rem; }
}
</style>
