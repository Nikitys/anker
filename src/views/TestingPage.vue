<script setup>
import RequestForm from '../components/RequestForm.vue'
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>Испытания и мониторинг анкеров</h1>
      <p>Приёмочные и контрольные испытания грунтовых анкеров по ГОСТ 5686. Долгосрочный мониторинг нагрузки для постоянных конструкций.</p>
    </div>
  </div>

  <section class="section">
    <div class="container service-content">
      <div class="service-block">
        <h2>Виды испытаний</h2>
        <div class="grid-2 tests-grid">
          <div class="test-card card">
            <div class="test-body">
              <h3>Приёмочные испытания</h3>
              <p>Проводятся на 100% анкеров. Пробная нагрузка 1,25 Pp (1,25 от проектной). Фиксация перемещений головки, построение графика «нагрузка — перемещение». Критерий приёмки — по ГОСТ 5686.</p>
            </div>
          </div>
          <div class="test-card card">
            <div class="test-body">
              <h3>Контрольные испытания</h3>
              <p>Проводятся на 5–10% анкеров (но не менее 3 штук). Ступенчатое нагружение до 1,5 Pp с выдержкой на каждой ступени. Определение несущей способности и ползучести.</p>
            </div>
          </div>
          <div class="test-card card">
            <div class="test-body">
              <h3>Пригодностные испытания</h3>
              <p>Проводятся на пробных анкерах до начала массового монтажа. Нагружение до 1,5–2,0 Pp. Подтверждение расчётных параметров по данным ИГИ.</p>
            </div>
          </div>
          <div class="test-card card">
            <div class="test-body">
              <h3>Мониторинг нагрузки</h3>
              <p>Установка тензодатчиков на постоянные анкеры. Непрерывный или периодический контроль усилия в тендоне. Передача данных на АСУ ТП или в облачную систему.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="service-block">
        <h2>Нормативная база</h2>
        <ul class="service-list">
          <li>ГОСТ 5686-2012 «Грунты. Методы полевых испытаний сваями»</li>
          <li>ГОСТ Р 58208 «Анкеры грунтовые»</li>
          <li>EN 1537 «Ground anchors» — при требовании заказчика</li>
        </ul>
      </div>

      <div class="service-block">
        <h2>Оборудование</h2>
        <p>Гидравлические домкраты с тарированными манометрами, индикаторы перемещений с точностью 0,01 мм, тензометрические датчики для долгосрочного мониторинга. Оборудование поверено и сертифицировано.</p>
      </div>
    </div>
  </section>

  <RequestForm title="Заказать испытания анкеров" dark />
</template>

<style scoped>
.page-top { padding: 120px 0 48px; background: linear-gradient(135deg, #0C1929, #1A3A6B); color: #fff; }
.page-top h1 { color: #fff; margin-bottom: 12px; }
.page-top p { color: rgba(255,255,255,0.7); max-width: 640px; }
.service-content { max-width: 900px; }
.service-block { margin-bottom: 48px; }
.service-block h2 { margin-bottom: 20px; }
.service-block p { color: var(--color-text-light); line-height: 1.7; }
.tests-grid { margin-top: 8px; }
.test-body { padding: 24px; }
.test-body h3 { margin-bottom: 8px; font-size: 1.05rem; }
.test-body p { color: var(--color-text-light); font-size: 0.9rem; margin: 0; }
.service-list { list-style: none; padding: 0; }
.service-list li { padding: 10px 0 10px 20px; border-bottom: 1px solid var(--color-border); position: relative; }
.service-list li::before { content: ''; position: absolute; left: 0; top: 16px; width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); }
</style>
