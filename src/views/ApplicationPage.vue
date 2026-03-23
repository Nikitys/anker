<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { applications, products } from '../data/products'
import RequestForm from '../components/RequestForm.vue'

const route = useRoute()
const app = computed(() => applications.find(a => a.slug === route.params.slug))

function getProduct(id) {
  return products.find(p => p.id === id)
}
</script>

<template>
  <div v-if="app">
    <div class="page-top">
      <div class="container">
        <h1>{{ app.heroTitle }}</h1>
      </div>
    </div>

    <section class="section">
      <div class="container app-layout">
        <p class="app-intro">{{ app.intro }}</p>

        <div class="app-block">
          <h2>Применяемые системы</h2>
          <div class="grid-3">
            <router-link
              v-for="sid in app.systems"
              :key="sid"
              :to="`/catalog/${getProduct(sid)?.slug}`"
              class="system-card card"
            >
              <div class="system-card-body">
                <h3>{{ getProduct(sid)?.shortName }}</h3>
                <p>{{ getProduct(sid)?.tagline }}</p>
                <span class="product-link">Подробнее &rarr;</span>
              </div>
            </router-link>
          </div>
        </div>

        <div class="app-block">
          <h2>На что обратить внимание</h2>
          <ul class="considerations">
            <li v-for="c in app.considerations" :key="c">{{ c }}</li>
          </ul>
        </div>

        <div class="app-block project-block">
          <h2>Проект из практики</h2>
          <div class="practice-card card">
            <div class="practice-body">
              <span class="tag">{{ app.project.type }}</span>
              <h3>{{ app.project.name }}</h3>
              <p>{{ app.project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RequestForm :title="`Получить расчёт для: ${app.shortName.toLowerCase()}`" dark />
  </div>
</template>

<style scoped>
.page-top {
  padding: 120px 0 48px;
  background: linear-gradient(135deg, #0C1929, #1A3A6B);
  color: #fff;
}
.page-top h1 { color: #fff; }

.app-layout { max-width: 900px; }
.app-intro {
  font-size: 1.1rem;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 48px;
}
.app-block { margin-bottom: 48px; }
.app-block h2 { margin-bottom: 20px; }

.system-card { color: inherit; }
.system-card:hover { color: inherit; }
.system-card-body { padding: 20px; }
.system-card-body h3 { margin-bottom: 4px; font-size: 1rem; }
.system-card-body p { color: var(--color-text-light); font-size: 0.875rem; margin-bottom: 8px; }
.product-link { color: var(--color-primary); font-weight: 600; font-size: 0.85rem; }

.considerations {
  list-style: none;
  padding: 0;
}
.considerations li {
  padding: 12px 0 12px 24px;
  border-bottom: 1px solid var(--color-border);
  position: relative;
  color: var(--color-text);
}
.considerations li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
}

.practice-card { overflow: visible; }
.practice-body { padding: 24px; }
.practice-body .tag { margin-bottom: 12px; }
.practice-body h3 { margin: 8px 0; }
.practice-body p { color: var(--color-text-light); line-height: 1.7; }
</style>
