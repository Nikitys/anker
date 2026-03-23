<script setup>
import RequestForm from '../components/RequestForm.vue'
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>Контакты</h1>
      <p>Свяжитесь с нами для расчёта анкерной системы под ваш объект</p>
    </div>
  </div>

  <section class="section">
    <div class="container contacts-grid">
      <div class="contacts-info">
        <div class="contact-block">
          <h3>Офис в Москве</h3>
          <p>123456, г. Москва, ул. Инженерная, д. 15, оф. 301</p>
        </div>
        <div class="contact-block">
          <h3>Телефон</h3>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </div>
        <div class="contact-block">
          <h3>E-mail</h3>
          <a href="mailto:info@ankersystems.ru">info@ankersystems.ru</a>
        </div>
        <div class="contact-block">
          <h3>Мессенджеры</h3>
          <div class="messengers">
            <a href="#" class="messenger-link">WhatsApp</a>
            <a href="#" class="messenger-link">Telegram</a>
          </div>
        </div>
        <div class="contact-block">
          <h3>Режим работы</h3>
          <p>Пн–Пт: 9:00–18:00 (МСК)</p>
        </div>
      </div>
      <div class="contacts-form">
        <RequestForm title="Запросить расчёт" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-top {
  padding: 120px 0 48px;
  background: linear-gradient(135deg, #0C1929, #1A3A6B);
  color: #fff;
}
.page-top h1 { color: #fff; margin-bottom: 12px; }
.page-top p { color: rgba(255,255,255,0.7); }

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 48px;
}
.contact-block {
  margin-bottom: 24px;
}
.contact-block h3 {
  margin-bottom: 6px;
  font-size: 0.95rem;
}
.contact-block p, .contact-block a {
  color: var(--color-text-light);
  font-size: 0.95rem;
}
.messengers { display: flex; gap: 8px; }
.messenger-link {
  padding: 6px 14px;
  background: rgba(26,58,107,0.06);
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .contacts-grid { grid-template-columns: 1fr; }
}
</style>
