<script setup>
import { ref, onMounted } from 'vue'
import { products, applications, projects } from '../data/products'
import CounterBlock from '../components/CounterBlock.vue'
import RequestForm from '../components/RequestForm.vue'
import { useStaggerReveal } from '../composables/useAnimations'

const { container: utpContainer } = useStaggerReveal('.utp-card', 0.15)
const { container: catalogContainer } = useStaggerReveal('.product-card', 0.12)

const heroVisible = ref(false)
onMounted(() => {
  setTimeout(() => { heroVisible.value = true }, 100)
})

const appTabs = applications.map(a => ({ id: a.id, name: a.shortName, slug: a.slug }))
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="container hero-content" :class="{ visible: heroVisible }">
      <h1>Анкерные системы для геотехники — поставка и проектирование под ключ</h1>
      <p class="hero-sub">Стержневые, прядевые, GFRP и извлекаемые анкеры. Расчёт несущей способности по ГОСТ Р — входит в стоимость поставки.</p>
      <div class="hero-actions">
        <router-link to="/contacts" class="btn btn-primary btn-pulse">Подобрать анкер под проект</router-link>
        <router-link to="/catalog" class="btn btn-secondary">Смотреть каталог</router-link>
      </div>
    </div>
  </section>

  <!-- УТП -->
  <section class="section utp-section" ref="utpContainer">
    <div class="container">
      <div class="section-title">
        <h2>Почему выбирают нас</h2>
      </div>
      <div class="grid-4">
        <div class="utp-card card" v-for="(item, i) in utpItems" :key="i">
          <div class="utp-icon" v-html="item.icon"></div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Каталог-превью -->
  <section class="section catalog-preview" ref="catalogContainer">
    <div class="container">
      <div class="section-title">
        <h2>Типы анкерных систем</h2>
        <p>Подбор системы — по результатам расчёта для вашего объекта</p>
      </div>
      <div class="grid-3">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="`/catalog/${product.slug}`"
          class="product-card card"
        >
          <div class="product-card-img">
            <div class="product-placeholder">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <rect x="8" y="8" width="48" height="48" rx="4" stroke="#1A3A6B" stroke-width="1.5" fill="none"/>
                <line x1="32" y1="12" x2="32" y2="52" stroke="#1A3A6B" stroke-width="1.5"/>
                <line x1="16" y1="32" x2="48" y2="32" stroke="#1A3A6B" stroke-width="1"/>
                <circle cx="32" cy="20" r="4" stroke="#E8A630" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          <div class="product-card-body">
            <div class="product-tags">
              <span class="tag" v-for="tag in product.tags.slice(0, 2)" :key="tag">{{ tag }}</span>
            </div>
            <h3>{{ product.shortName }}</h3>
            <p class="product-tagline">{{ product.tagline }}</p>
            <span class="product-link">Подробнее &rarr;</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Проектирование баннер -->
  <section class="engineering-banner">
    <div class="container engineering-banner-inner">
      <div class="engineering-text">
        <h2>Заказали анкеры — получили проект</h2>
        <p>Наши инженеры разрабатывают рабочую документацию на анкерное крепление: расчёт несущей способности, схемы расстановки, узлы головок, программу испытаний. Документация соответствует требованиям экспертизы РФ. Услуга проектирования также доступна отдельно — для объектов с уже выбранным поставщиком.</p>
        <router-link to="/services/proektirovanie" class="btn btn-primary">Узнать о проектировании &rarr;</router-link>
      </div>
      <div class="engineering-visual">
        <svg viewBox="0 0 200 200" fill="none" class="blueprint-svg">
          <rect x="10" y="10" width="180" height="180" stroke="#1A3A6B" stroke-width="0.5" fill="none" stroke-dasharray="4 2"/>
          <line x1="100" y1="20" x2="100" y2="180" stroke="#1A3A6B" stroke-width="1" stroke-dasharray="8 4"/>
          <line x1="40" y1="60" x2="160" y2="60" stroke="#E8A630" stroke-width="1.5"/>
          <line x1="40" y1="100" x2="160" y2="100" stroke="#E8A630" stroke-width="1.5"/>
          <line x1="40" y1="140" x2="160" y2="140" stroke="#E8A630" stroke-width="1.5"/>
          <circle cx="70" cy="60" r="6" stroke="#1A3A6B" stroke-width="1.5" fill="rgba(26,58,107,0.1)"/>
          <circle cx="130" cy="60" r="6" stroke="#1A3A6B" stroke-width="1.5" fill="rgba(26,58,107,0.1)"/>
          <circle cx="70" cy="100" r="6" stroke="#1A3A6B" stroke-width="1.5" fill="rgba(26,58,107,0.1)"/>
          <circle cx="130" cy="100" r="6" stroke="#1A3A6B" stroke-width="1.5" fill="rgba(26,58,107,0.1)"/>
          <path d="M70 60 L50 30" stroke="#1A3A6B" stroke-width="1" stroke-dasharray="3 2"/>
          <path d="M130 60 L150 30" stroke="#1A3A6B" stroke-width="1" stroke-dasharray="3 2"/>
          <text x="30" y="28" font-size="8" fill="#1A3A6B" font-family="Inter">800 кН</text>
          <text x="140" y="28" font-size="8" fill="#1A3A6B" font-family="Inter">800 кН</text>
        </svg>
      </div>
    </div>
  </section>

  <!-- Области применения -->
  <section class="section">
    <div class="container">
      <div class="section-title">
        <h2>Области применения</h2>
      </div>
      <div class="apps-grid">
        <router-link
          v-for="app in appTabs"
          :key="app.id"
          :to="`/applications/${app.slug}`"
          class="app-card card"
        >
          <div class="app-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="4" y="16" width="32" height="20" rx="2" stroke="#1A3A6B" stroke-width="1.5" fill="none"/>
              <line x1="12" y1="16" x2="8" y2="4" stroke="#E8A630" stroke-width="1.5"/>
              <line x1="28" y1="16" x2="32" y2="4" stroke="#E8A630" stroke-width="1.5"/>
              <circle cx="12" cy="16" r="2" fill="#1A3A6B"/>
              <circle cx="28" cy="16" r="2" fill="#1A3A6B"/>
            </svg>
          </div>
          <span>{{ app.name }}</span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Счётчики -->
  <CounterBlock />

  <!-- Проекты -->
  <section class="section">
    <div class="container">
      <div class="section-title">
        <h2>Реализованные проекты</h2>
      </div>
      <div class="grid-3">
        <div v-for="project in projects.slice(0, 3)" :key="project.id" class="project-card card">
          <div class="project-card-img">
            <div class="project-placeholder">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="20" width="40" height="24" rx="2" stroke="#fff" stroke-width="1.5" fill="none"/>
                <line x1="4" y1="28" x2="44" y2="28" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                <line x1="4" y1="36" x2="44" y2="36" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                <path d="M16 20L12 8" stroke="#E8A630" stroke-width="1.5"/>
                <path d="M32 20L36 8" stroke="#E8A630" stroke-width="1.5"/>
              </svg>
            </div>
          </div>
          <div class="project-card-body">
            <span class="tag">{{ project.type }}</span>
            <h3>{{ project.name }}</h3>
            <p class="project-city">{{ project.city }}</p>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 32px;">
        <router-link to="/projects" class="btn btn-outline">Все проекты &rarr;</router-link>
      </div>
    </div>
  </section>

  <!-- Форма -->
  <RequestForm dark />
</template>

<script>
const utpItems = [
  {
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 32L20 4L32 32" stroke="#1A3A6B" stroke-width="2"/><line x1="12" y1="24" x2="28" y2="24" stroke="#1A3A6B" stroke-width="1.5"/><line x1="4" y1="36" x2="36" y2="36" stroke="#E8A630" stroke-width="1.5" stroke-dasharray="3 2"/></svg>',
    title: 'Проектирование включено',
    text: 'Расчёт анкеров по СП 24.13330 и EN 1997 входит в комплект поставки. Не нужно отдельно нанимать проектировщика.'
  },
  {
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="12" width="32" height="24" rx="2" stroke="#1A3A6B" stroke-width="2" fill="none"/><line x1="12" y1="12" x2="8" y2="4" stroke="#E8A630" stroke-width="2"/><line x1="28" y1="12" x2="32" y2="4" stroke="#E8A630" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="#1A3A6B"/><circle cx="28" cy="12" r="2" fill="#1A3A6B"/></svg>',
    title: 'Полный цикл',
    text: 'От выбора типа анкера до испытаний по ГОСТ 5686 и авторского надзора при монтаже.'
  },
  {
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#1A3A6B" stroke-width="2" fill="none"/><circle cx="20" cy="20" r="10" stroke="#E8A630" stroke-width="1.5" fill="none"/><circle cx="20" cy="20" r="4" fill="#1A3A6B"/></svg>',
    title: 'Антикоррозионная защита',
    text: 'Одно- и двойное пластиковое покрытие для агрессивных сред и объектов со сроком службы 50+ лет.'
  },
  {
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#1A3A6B" stroke-width="2" fill="none"/><path d="M20 10V20L28 24" stroke="#E8A630" stroke-width="2" stroke-linecap="round"/></svg>',
    title: 'Сроки поставки',
    text: 'Стандартные позиции — со склада в Москве. Нестандартные — от 4 недель.'
  }
]

export default {
  data() { return { utpItems } }
}
</script>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0C1929 0%, #1A3A6B 50%, #0F2444 100%);
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}
.hero h1 {
  color: #fff;
  font-size: 2.8rem;
  margin-bottom: 20px;
  line-height: 1.15;
}
.hero-sub {
  color: rgba(255,255,255,0.75);
  font-size: 1.15rem;
  margin-bottom: 32px;
  line-height: 1.6;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* UTP */
.utp-section { background: #fff; }
.utp-card {
  padding: 32px 24px;
  text-align: center;
}
.utp-icon {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}
.utp-card h3 { margin-bottom: 8px; }
.utp-card p { color: var(--color-text-light); font-size: 0.9rem; }

/* Catalog preview */
.catalog-preview { background: var(--color-bg); }
.product-card {
  display: block;
  color: inherit;
}
.product-card:hover { color: inherit; }
.product-card-img {
  height: 180px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-placeholder { opacity: 0.5; }
.product-card-body {
  padding: 20px;
}
.product-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
}
.product-card-body h3 {
  margin-bottom: 4px;
  font-size: 1.05rem;
}
.product-tagline {
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 12px;
}
.product-link {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
}

/* Engineering banner */
.engineering-banner {
  background: linear-gradient(135deg, #f0f4f8 0%, #e8edf4 100%);
  padding: 80px 0;
}
.engineering-banner-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}
.engineering-text h2 { margin-bottom: 16px; }
.engineering-text p {
  color: var(--color-text-light);
  margin-bottom: 24px;
  line-height: 1.7;
}
.blueprint-svg {
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: block;
}

/* Applications */
.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.app-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  color: var(--color-text);
  font-weight: 500;
}
.app-card:hover { color: var(--color-primary); }

/* Projects */
.project-card-img {
  height: 160px;
  background: linear-gradient(135deg, #1A3A6B, #2A5298);
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-placeholder { opacity: 0.5; }
.project-card-body {
  padding: 20px;
}
.project-card-body .tag { margin-bottom: 10px; }
.project-card-body h3 { margin-bottom: 4px; font-size: 1.05rem; }
.project-city {
  color: var(--color-text-light);
  font-size: 0.85rem;
  margin-bottom: 8px;
}
.project-card-body p:last-child {
  color: var(--color-text-light);
  font-size: 0.875rem;
}

@media (max-width: 1024px) {
  .engineering-banner-inner { grid-template-columns: 1fr; }
  .engineering-visual { display: none; }
  .apps-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .hero { min-height: auto; padding-top: calc(var(--header-height) + 40px); padding-bottom: 48px; }
  .hero h1 { font-size: 1.6rem; }
  .hero-sub { font-size: 1rem; }
  .hero-actions { flex-direction: column; }
  .hero-actions .btn { width: 100%; justify-content: center; }
  .apps-grid { grid-template-columns: 1fr; }
  .engineering-banner { padding: 48px 0; }
}
@media (max-width: 480px) {
  .hero h1 { font-size: 1.35rem; }
  .utp-card { padding: 24px 16px; }
}
</style>
