<script setup>
import { applications } from '../data/products'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo">АнкерСистемы</div>
          <p>Проектирование и поставка анкерных систем для геотехнических работ в РФ</p>
          <div class="footer-contacts">
            <a href="tel:+74951234567">+7 (495) 123-45-67</a>
            <a href="mailto:info@ankersystems.ru">info@ankersystems.ru</a>
          </div>
          <div class="footer-messengers">
            <a href="#" title="WhatsApp" class="messenger-btn">WhatsApp</a>
            <a href="#" title="Telegram" class="messenger-btn">Telegram</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Каталог</h4>
          <router-link to="/catalog">Все анкерные системы</router-link>
          <router-link to="/catalog/sterzhnevye-ankery">Стержневые анкеры</router-link>
          <router-link to="/catalog/pryadevye-ankery">Прядевые анкеры</router-link>
          <router-link to="/catalog/gfrp-ankery">GFRP-анкеры</router-link>
          <router-link to="/catalog/izvlekaemye-ankery">Извлекаемые анкеры</router-link>
        </div>
        <div class="footer-col">
          <h4>Услуги</h4>
          <router-link to="/services/proektirovanie">Проектирование</router-link>
          <router-link to="/services/postavka">Поставка</router-link>
          <router-link to="/services/montazh">Монтаж</router-link>
          <router-link to="/services/ispytaniya">Испытания</router-link>
        </div>
        <div class="footer-col">
          <h4>Применение</h4>
          <router-link v-for="app in applications" :key="app.id" :to="`/applications/${app.slug}`">{{ app.shortName }}</router-link>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 АнкерСистемы. Все права защищены.</p>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-dark);
  color: var(--color-text-white);
  padding: 64px 0 24px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}
.footer-logo {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
}
.footer-col p {
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
  margin-bottom: 16px;
}
.footer-col h4 {
  color: #fff;
  margin-bottom: 16px;
  font-size: 0.95rem;
}
.footer-col a {
  display: block;
  color: rgba(255,255,255,0.6);
  font-size: 0.875rem;
  padding: 4px 0;
  transition: color 0.2s;
}
.footer-col a:hover { color: #fff; }
.footer-contacts a {
  font-weight: 500;
  color: rgba(255,255,255,0.8);
}
.footer-messengers {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
.messenger-btn {
  padding: 6px 14px !important;
  background: rgba(255,255,255,0.1);
  border-radius: 6px;
  font-size: 0.8rem !important;
  color: rgba(255,255,255,0.8) !important;
}
.messenger-btn:hover { background: rgba(255,255,255,0.2); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-bottom p { color: rgba(255,255,255,0.4); font-size: 0.85rem; }
.footer-bottom a { color: rgba(255,255,255,0.4); font-size: 0.85rem; }

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1.5fr 1fr; gap: 32px; }
}
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
  .footer { padding-bottom: 80px; }
}
</style>
