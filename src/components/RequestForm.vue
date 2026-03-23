<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Получите расчёт анкеров для вашего объекта за 2 рабочих дня' },
  dark: { type: Boolean, default: false },
  anchorType: { type: String, default: '' }
})

const form = reactive({
  objectType: '',
  load: '',
  soil: '',
  lifetime: '',
  name: '',
  contact: ''
})

const errors = ref({})
const submitted = ref(false)

function validate() {
  errors.value = {}
  if (!form.objectType) errors.value.objectType = true
  if (!form.name) errors.value.name = true
  if (!form.contact) errors.value.contact = true
  return Object.keys(errors.value).length === 0
}

function submit() {
  if (!validate()) return
  submitted.value = true
}
</script>

<template>
  <section class="request-form-section" :class="{ dark }">
    <div class="container">
      <h2>{{ title }}</h2>
      <div v-if="!submitted" class="form-wrapper">
        <div class="form-grid">
          <div class="form-group" :class="{ error: errors.objectType }">
            <label>Тип объекта</label>
            <select v-model="form.objectType">
              <option value="">Выберите тип</option>
              <option>Котлован</option>
              <option>Откос / склон</option>
              <option>Плотина / гидросооружение</option>
              <option>Тоннель / метро</option>
              <option>Подпорная стена</option>
              <option>Другое</option>
            </select>
          </div>
          <div class="form-group">
            <label>Ожидаемая нагрузка на анкер, кН</label>
            <input type="number" v-model="form.load" placeholder="Например, 800">
          </div>
          <div class="form-group">
            <label>Грунтовые условия</label>
            <select v-model="form.soil">
              <option value="">Выберите</option>
              <option>Песок</option>
              <option>Глина</option>
              <option>Скала</option>
              <option>Неизвестно</option>
            </select>
          </div>
          <div class="form-group">
            <label>Срок службы</label>
            <select v-model="form.lifetime">
              <option value="">Выберите</option>
              <option>Временный</option>
              <option>Постоянный</option>
            </select>
          </div>
          <div class="form-group" :class="{ error: errors.name }">
            <label>Контактное лицо</label>
            <input type="text" v-model="form.name" placeholder="Имя">
          </div>
          <div class="form-group" :class="{ error: errors.contact }">
            <label>Телефон / e-mail</label>
            <input type="text" v-model="form.contact" placeholder="+7 (___) ___-__-__ или email">
          </div>
        </div>
        <button class="btn btn-primary" @click="submit">Отправить запрос</button>
      </div>
      <div v-else class="form-success">
        <svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#059669"/><path d="M14 24l7 7 13-13" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/></svg>
        <h3>Заявка отправлена</h3>
        <p>Наш инженер свяжется с вами в течение 2 рабочих часов для уточнения деталей.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.request-form-section {
  padding: 80px 0;
  background: var(--color-bg);
}
.request-form-section.dark {
  background: var(--color-bg-dark);
  color: #fff;
}
.request-form-section.dark h2 { color: #fff; }
.request-form-section.dark label { color: rgba(255,255,255,0.8); }
.request-form-section.dark input,
.request-form-section.dark select {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  color: #fff;
}
.request-form-section h2 { margin-bottom: 32px; text-align: center; }
.form-wrapper { max-width: 800px; margin: 0 auto; }
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin-bottom: 24px;
}
.form-success {
  text-align: center;
  padding: 48px 0;
}
.form-success svg { margin: 0 auto 16px; }
.form-success h3 { margin-bottom: 8px; }
.form-success p { color: var(--color-text-light); }
.request-form-section.dark .form-success h3 { color: #fff; }
.request-form-section.dark .form-success p { color: rgba(255,255,255,0.6); }

@media (max-width: 768px) {
  .form-grid { grid-template-columns: 1fr; }
}
</style>
