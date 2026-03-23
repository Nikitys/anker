<script setup>
import { ref, onMounted } from 'vue'
import RequestForm from '../components/RequestForm.vue'
import gsap from 'gsap'

const timelineEl = ref(null)
const stepsVisible = ref([])

const steps = [
  { title: 'Заявка', text: 'Заполняете форму, прикладываете ИГИ и геоподоснову' },
  { title: 'Предварительный расчёт', text: 'В течение 2 рабочих дней даём предварительные параметры анкеров' },
  { title: 'Договор', text: 'Фиксируем объём, сроки, стоимость' },
  { title: 'Разработка РД', text: 'От 5 рабочих дней для типовых объектов' },
  { title: 'Согласование', text: 'Вносим правки по замечаниям заказчика / экспертизы' },
  { title: 'Авторский надзор', text: 'При монтаже и испытаниях (опционально)' }
]

const formats = [
  { title: 'Проектирование + поставка', text: 'Полный цикл: рассчитываем, поставляем, сопровождаем монтаж. Оптимально для новых объектов.' },
  { title: 'Только проектирование', text: 'Разрабатываем документацию под любой бренд анкеров. Подходит, если поставщик уже выбран или требуется независимая экспертиза.' },
  { title: 'Проверка чужого проекта', text: 'Экспертная оценка готового проекта анкерного крепления. Выявляем ошибки до начала монтажа.' }
]

const scope = [
  'Сбор и анализ инженерно-геологических данных',
  'Расчёт несущей способности одиночного анкера и группы',
  'Подбор типа и диаметра тендона',
  'Схема расстановки анкеров (план, разрез)',
  'Конструирование анкерных головок и опорных плит',
  'Программа приёмочных и контрольных испытаний по ГОСТ 5686',
  'Спецификация и ведомость объёмов',
  'Пояснительная записка для экспертизы'
]

const norms = [
  'СП 24.13330.2021 «Свайные фундаменты»',
  'ГОСТ 5686-2012 «Сваи. Методы полевых испытаний»',
  'ГОСТ Р 58208 «Анкеры грунтовые»',
  'EN 1997-1 (Eurocode 7) — при требовании заказчика',
  'Местные ТУ и требования экспертизы субъектов РФ'
]

onMounted(() => {
  if (!timelineEl.value) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    stepsVisible.value = steps.map(() => true)
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.dataset.idx)
        stepsVisible.value[idx] = true
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  timelineEl.value.querySelectorAll('.timeline-step').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>Проектирование анкерного крепления — собственный инжиниринг</h1>
      <p>Разрабатываем рабочую документацию на анкерные системы. Соответствие СП, ГОСТ Р, EN 1997. Прохождение экспертизы — наша ответственность.</p>
    </div>
  </div>

  <!-- Scope -->
  <section class="section">
    <div class="container">
      <h2>Что входит в проектирование</h2>
      <div class="scope-grid">
        <div v-for="(item, i) in scope" :key="i" class="scope-item">
          <div class="scope-num">{{ String(i + 1).padStart(2, '0') }}</div>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Norms -->
  <section class="norms-section">
    <div class="container">
      <h2>Нормативная база</h2>
      <p class="norms-intro">Проектирование ведётся в соответствии с:</p>
      <ul class="norms-list">
        <li v-for="norm in norms" :key="norm">{{ norm }}</li>
      </ul>
    </div>
  </section>

  <!-- Formats -->
  <section class="section">
    <div class="container">
      <div class="section-title">
        <h2>Форматы сотрудничества</h2>
      </div>
      <div class="grid-3">
        <div v-for="(f, i) in formats" :key="i" class="format-card card">
          <div class="format-num">{{ i + 1 }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="section timeline-section">
    <div class="container">
      <div class="section-title">
        <h2>Процесс работы</h2>
      </div>
      <div class="timeline" ref="timelineEl">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="timeline-step"
          :class="{ visible: stepsVisible[i] }"
          :data-idx="i"
        >
          <div class="timeline-marker">
            <span>{{ i + 1 }}</span>
          </div>
          <div class="timeline-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <RequestForm
    title="Нужен расчёт анкерного крепления?"
    dark
  />
</template>

<style scoped>
.page-top {
  padding: 120px 0 48px;
  background: linear-gradient(135deg, #0C1929, #1A3A6B);
  color: #fff;
}
.page-top h1 { color: #fff; margin-bottom: 12px; }
.page-top p { color: rgba(255,255,255,0.7); max-width: 640px; }

.scope-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;
}
.scope-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}
.scope-num {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-accent);
  min-width: 28px;
}
.scope-item span { font-size: 0.925rem; }

.norms-section {
  background: #fff;
  padding: 64px 0;
}
.norms-section h2 { margin-bottom: 8px; }
.norms-intro { color: var(--color-text-light); margin-bottom: 20px; }
.norms-list {
  list-style: none;
  padding: 0;
}
.norms-list li {
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
  padding-left: 20px;
  position: relative;
  color: var(--color-text);
  font-size: 0.95rem;
}
.norms-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary);
}

.format-card {
  padding: 32px 24px;
}
.format-num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 16px;
}
.format-card h3 { margin-bottom: 8px; }
.format-card p { color: var(--color-text-light); font-size: 0.9rem; }

/* Timeline */
.timeline {
  max-width: 640px;
  margin: 0 auto;
  position: relative;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}
.timeline-step {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.timeline-step.visible {
  opacity: 1;
  transform: translateY(0);
}
.timeline-marker {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
.timeline-content h3 { margin-bottom: 4px; }
.timeline-content p { color: var(--color-text-light); font-size: 0.9rem; }

@media (max-width: 768px) {
  .scope-grid { grid-template-columns: 1fr; }
}
</style>
