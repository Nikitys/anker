<script setup>
import { projects } from '../data/products'
import RequestForm from '../components/RequestForm.vue'
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>Реализованные проекты</h1>
      <p>География поставок — от Москвы до Красноярска. Объекты промышленного, транспортного и гражданского строительства.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="projects-list">
        <div v-for="project in projects" :key="project.id" class="project-item card">
          <div class="project-img">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="20" width="40" height="24" rx="2" stroke="#fff" stroke-width="1.5" fill="none"/>
              <path d="M16 20L12 8" stroke="#E8A630" stroke-width="1.5"/>
              <path d="M32 20L36 8" stroke="#E8A630" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="project-body">
            <div class="project-meta">
              <span class="tag">{{ project.type }}</span>
              <span class="project-city-tag">{{ project.city }}</span>
            </div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <RequestForm dark />
</template>

<style scoped>
.page-top {
  padding: 120px 0 48px;
  background: linear-gradient(135deg, #0C1929, #1A3A6B);
  color: #fff;
}
.page-top h1 { color: #fff; margin-bottom: 12px; }
.page-top p { color: rgba(255,255,255,0.7); }

.projects-list { display: flex; flex-direction: column; gap: 24px; }
.project-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  overflow: hidden;
}
.project-img {
  background: linear-gradient(135deg, #1A3A6B, #2A5298);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
}
.project-body { padding: 24px; }
.project-meta { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; }
.project-city-tag {
  font-size: 0.8rem;
  color: var(--color-text-light);
  font-weight: 500;
}
.project-body h3 { margin-bottom: 8px; }
.project-body p { color: var(--color-text-light); font-size: 0.9rem; line-height: 1.7; }

@media (max-width: 768px) {
  .project-item { grid-template-columns: 1fr; }
  .project-img { min-height: 120px; }
}
</style>
