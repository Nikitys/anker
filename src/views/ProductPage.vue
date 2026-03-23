<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCatalogStore } from '../stores/catalog'
import RequestForm from '../components/RequestForm.vue'
import gsap from 'gsap'

const route = useRoute()
const store = useCatalogStore()
const product = computed(() => store.getProductBySlug(route.params.slug))

const svgEl = ref(null)
onMounted(() => {
  if (!svgEl.value) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return
  const paths = svgEl.value.querySelectorAll('line, circle, rect, path')
  paths.forEach(p => {
    const len = p.getTotalLength?.() || 100
    gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.out' })
  })
})
</script>

<template>
  <div v-if="product">
    <div class="page-top">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/catalog">Каталог</router-link> / <span>{{ product.name }}</span>
        </div>
        <h1>{{ product.name }}</h1>
        <div class="product-tags-top">
          <span class="tag" v-for="tag in product.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container product-layout">
        <div class="product-main">
          <!-- SVG Schema -->
          <div class="product-svg" ref="svgEl">
            <svg viewBox="0 0 400 200" fill="none" class="anchor-schema">
              <rect x="10" y="10" width="380" height="180" rx="4" stroke="#e2e8f0" stroke-width="0.5"/>
              <!-- Anchor shaft -->
              <line x1="50" y1="100" x2="350" y2="100" stroke="#1A3A6B" stroke-width="3"/>
              <!-- Free length -->
              <line x1="50" y1="80" x2="200" y2="80" stroke="#E8A630" stroke-width="1" stroke-dasharray="4 2"/>
              <text x="110" y="75" font-size="10" fill="#E8A630" font-family="Inter">Свободная зона</text>
              <!-- Bond length -->
              <line x1="200" y1="80" x2="350" y2="80" stroke="#059669" stroke-width="1" stroke-dasharray="4 2"/>
              <text x="250" y="75" font-size="10" fill="#059669" font-family="Inter">Корневая заделка</text>
              <!-- Anchor head -->
              <rect x="30" y="85" width="20" height="30" rx="2" stroke="#1A3A6B" stroke-width="2" fill="rgba(26,58,107,0.1)"/>
              <circle cx="40" cy="100" r="4" fill="#E8A630"/>
              <!-- Grout -->
              <rect x="200" y="90" width="150" height="20" rx="4" stroke="#059669" stroke-width="1.5" fill="rgba(5,150,105,0.08)"/>
              <!-- Protection -->
              <line x1="60" y1="120" x2="350" y2="120" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2 2"/>
              <text x="160" y="140" font-size="9" fill="#94a3b8" font-family="Inter">Антикоррозионная защита</text>
            </svg>
          </div>

          <!-- Description -->
          <div class="product-description">
            <h2>Описание</h2>
            <p v-for="(para, i) in product.fullDescription.split('\n\n')" :key="i">{{ para }}</p>
          </div>

          <!-- Specs table (sticky) -->
          <div class="product-specs">
            <h2>Технические характеристики</h2>
            <table>
              <tr v-for="(val, key) in product.specs" :key="key">
                <td class="spec-key">{{ key }}</td>
                <td class="spec-val">{{ val }}</td>
              </tr>
            </table>
          </div>

          <!-- Applications -->
          <div class="product-applications">
            <h2>Применение</h2>
            <div class="app-chips">
              <router-link
                v-for="app in product.applications"
                :key="app"
                :to="`/applications/${getAppSlug(app)}`"
                class="app-chip"
              >{{ app }}</router-link>
            </div>
          </div>

          <!-- Services -->
          <div class="product-services">
            <h2>Сопутствующие услуги</h2>
            <ul>
              <li>Расчёт несущей способности</li>
              <li>Подбор схемы расстановки</li>
              <li>Разработка рабочей документации</li>
              <li>Проведение испытаний по ГОСТ 5686</li>
            </ul>
          </div>

          <!-- FAQ -->
          <div class="product-faq" v-if="product.faq?.length">
            <h2>Часто задаваемые вопросы</h2>
            <div v-for="(item, i) in product.faq" :key="i" class="faq-item">
              <h3>{{ item.q }}</h3>
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RequestForm :title="`Запросить расчёт: ${product.name}`" dark />
  </div>
</template>

<script>
export default {
  methods: {
    getAppSlug(name) {
      const map = {
        'Котлованы': 'kotlovany', 'Откосы': 'otkosy', 'Подпорные стены': 'podpornye-steny',
        'Плотины': 'plotiny', 'Гидросооружения': 'plotiny', 'Тоннели': 'tonneli',
        'Метро': 'tonneli', 'Фундаменты': 'kotlovany', 'Глубокие котлованы': 'kotlovany',
        'Городская застройка': 'kotlovany'
      }
      return map[name] || 'kotlovany'
    }
  }
}
</script>

<style scoped>
.page-top {
  padding: 120px 0 48px;
  background: linear-gradient(135deg, #0C1929, #1A3A6B);
  color: #fff;
}
.page-top h1 { color: #fff; margin-bottom: 12px; font-size: 2rem; }
.breadcrumbs {
  margin-bottom: 16px;
  font-size: 0.875rem;
}
.breadcrumbs a { color: rgba(255,255,255,0.6); }
.breadcrumbs span { color: rgba(255,255,255,0.9); }
.product-tags-top { display: flex; gap: 6px; }
.product-tags-top .tag { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.9); }

.product-layout { max-width: 860px; }
.product-main > div { margin-bottom: 48px; }
.product-main h2 { margin-bottom: 16px; font-size: 1.4rem; }
.product-main p { margin-bottom: 12px; color: var(--color-text-light); line-height: 1.7; }

.anchor-schema { width: 100%; max-width: 600px; }

.product-specs table {
  width: 100%;
  border-collapse: collapse;
}
.product-specs tr { border-bottom: 1px solid var(--color-border); }
.product-specs td { padding: 12px 0; }
.spec-key { font-weight: 600; color: var(--color-text); width: 45%; }
.spec-val { color: var(--color-text-light); }

.app-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.app-chip {
  padding: 8px 16px;
  background: rgba(26,58,107,0.06);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);
  transition: background 0.2s;
}
.app-chip:hover { background: rgba(26,58,107,0.12); }

.product-services ul {
  list-style: none;
  padding: 0;
}
.product-services li {
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-light);
  padding-left: 20px;
  position: relative;
}
.product-services li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
}

.faq-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
}
.faq-item h3 { color: var(--color-primary-dark); margin-bottom: 8px; font-size: 1.05rem; }
.faq-item p { color: var(--color-text-light); margin: 0; }
</style>
