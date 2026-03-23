<script setup>
import { useCatalogStore } from '../stores/catalog'
import RequestForm from '../components/RequestForm.vue'

const store = useCatalogStore()
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>Каталог анкерных систем для геотехнических работ</h1>
      <p>Постоянные и временные анкеры, стержневые и прядевые, с одинарной и двойной антикоррозионной защитой. Подбор системы — по результатам расчёта.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <!-- Filters -->
      <div class="filters">
        <div class="filter-group">
          <label>Тип тендона</label>
          <select v-model="store.filters.tendonType">
            <option value="">Все</option>
            <option>Стержневой</option>
            <option>Прядевой</option>
            <option>GFRP</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Срок службы</label>
          <select v-model="store.filters.lifetime">
            <option value="">Все</option>
            <option>Временный</option>
            <option>Постоянный</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Извлекаемость</label>
          <select v-model="store.filters.extractable">
            <option value="">Все</option>
            <option>Полностью</option>
            <option>Неизвлекаемый</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Нагрузка</label>
          <select v-model="store.filters.loadRange">
            <option value="">Все</option>
            <option>до 500 кН</option>
            <option>500–1500 кН</option>
            <option>свыше 1500 кН</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Защита</label>
          <select v-model="store.filters.corrosionProtection">
            <option value="">Все</option>
            <option>Одинарная</option>
            <option>Двойная</option>
          </select>
        </div>
        <button class="btn btn-sm btn-outline" @click="store.resetFilters" v-if="Object.values(store.filters).some(v => v)">Сбросить</button>
      </div>

      <!-- Products grid -->
      <transition-group name="catalog" tag="div" class="grid-3">
        <router-link
          v-for="product in store.filteredProducts"
          :key="product.id"
          :to="`/catalog/${product.slug}`"
          class="catalog-card card"
        >
          <div class="catalog-card-img">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <rect x="8" y="8" width="48" height="48" rx="4" stroke="#1A3A6B" stroke-width="1.5" fill="none"/>
              <line x1="32" y1="12" x2="32" y2="52" stroke="#1A3A6B" stroke-width="1.5"/>
              <circle cx="32" cy="20" r="4" stroke="#E8A630" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
          <div class="catalog-card-body">
            <div class="product-tags">
              <span class="tag" v-for="tag in product.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.catalogDescription }}</p>
            <div class="catalog-card-specs">
              <span>{{ product.specs['Предельная нагрузка'] }}</span>
              <span>{{ product.specs['Диаметры'] || product.specs['Количество прядей'] || '' }}</span>
            </div>
            <div class="catalog-card-actions">
              <span class="btn btn-sm btn-outline">Подробнее</span>
              <span class="btn btn-sm btn-primary" @click.prevent>Запросить КП</span>
            </div>
          </div>
        </router-link>
      </transition-group>

      <div v-if="store.filteredProducts.length === 0" class="empty-state">
        <p>Нет товаров, соответствующих выбранным фильтрам.</p>
        <button class="btn btn-outline btn-sm" @click="store.resetFilters">Сбросить фильтры</button>
      </div>
    </div>
  </section>

  <RequestForm />
</template>

<style scoped>
.page-top {
  padding: 120px 0 48px;
  background: linear-gradient(135deg, #0C1929, #1A3A6B);
  color: #fff;
}
.page-top h1 { color: #fff; margin-bottom: 12px; }
.page-top p { color: rgba(255,255,255,0.7); max-width: 640px; }

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
  padding: 20px;
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  align-items: end;
}
.filter-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.filter-group label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-light);
}
.filter-group select {
  padding: 8px 12px;
  border: 1.5px solid var(--color-border);
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.875rem;
  background: #fff;
}

.catalog-card {
  display: flex;
  flex-direction: column;
  color: inherit;
}
.catalog-card:hover { color: inherit; }
.catalog-card-img {
  height: 160px;
  background: linear-gradient(135deg, #f0f4f8, #e2e8f0);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}
.catalog-card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.catalog-card-body h3 { margin: 8px 0; font-size: 1.05rem; }
.catalog-card-body p { color: var(--color-text-light); font-size: 0.875rem; flex: 1; margin-bottom: 12px; }
.catalog-card-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}
.catalog-card-specs span {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(26,58,107,0.06);
  padding: 4px 8px;
  border-radius: 4px;
}
.catalog-card-actions {
  display: flex;
  gap: 8px;
}
.empty-state {
  text-align: center;
  padding: 64px 0;
  color: var(--color-text-light);
}

/* Transition */
.catalog-enter-active, .catalog-leave-active { transition: all 0.3s ease; }
.catalog-enter-from, .catalog-leave-to { opacity: 0; transform: scale(0.95); }

@media (max-width: 768px) {
  .filters { flex-direction: column; }
  .filter-group { width: 100%; }
  .filter-group select { width: 100%; }
  .catalog-card-actions { flex-direction: column; }
  .catalog-card-actions .btn { width: 100%; justify-content: center; }
  .page-top { padding: 100px 0 32px; }
  .page-top h1 { font-size: 1.4rem; }
}
</style>
