<script setup>
import RequestForm from '../components/RequestForm.vue'
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>Монтажное сопровождение</h1>
      <p>Авторский надзор и техническое сопровождение при монтаже анкерных систем. Контроль соответствия проекту на каждом этапе.</p>
    </div>
  </div>

  <section class="section">
    <div class="container service-content">
      <div class="service-block">
        <h2>Что включает сопровождение</h2>
        <ul class="service-list">
          <li>Инструктаж бригады подрядчика перед началом работ</li>
          <li>Контроль бурения скважин: диаметр, глубина, наклон</li>
          <li>Контроль установки тендона и центраторов</li>
          <li>Надзор за инъектированием цементного раствора</li>
          <li>Контроль стрессовки (натяжения) анкеров</li>
          <li>Оформление актов скрытых работ</li>
          <li>Присутствие при приёмочных испытаниях</li>
        </ul>
      </div>

      <div class="service-block">
        <h2>Когда необходимо сопровождение</h2>
        <p>Рекомендуется для всех объектов, где подрядчик впервые работает с данным типом анкерной системы, а также для ответственных конструкций (постоянные анкеры, плотины, объекты метрополитена). Наш инженер на площадке — это гарантия соблюдения технологии и предотвращения ошибок, стоимость исправления которых многократно превышает стоимость надзора.</p>
      </div>
    </div>
  </section>

  <RequestForm title="Заказать монтажное сопровождение" dark />
</template>

<style scoped>
.page-top { padding: 120px 0 48px; background: linear-gradient(135deg, #0C1929, #1A3A6B); color: #fff; }
.page-top h1 { color: #fff; margin-bottom: 12px; }
.page-top p { color: rgba(255,255,255,0.7); max-width: 640px; }
.service-content { max-width: 800px; }
.service-block { margin-bottom: 40px; }
.service-block h2 { margin-bottom: 16px; }
.service-block p { color: var(--color-text-light); line-height: 1.7; }
.service-list { list-style: none; padding: 0; }
.service-list li { padding: 10px 0 10px 20px; border-bottom: 1px solid var(--color-border); position: relative; }
.service-list li::before { content: ''; position: absolute; left: 0; top: 16px; width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); }
</style>
