<script setup>
import CounterBlock from '../components/CounterBlock.vue'
import RequestForm from '../components/RequestForm.vue'
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>О компаниии</h1>
      <p>Инжиниринговая компания, специализирующаяся на проектировании и поставке анкерных систем для геотехнических работ в России.</p>
    </div>
  </div>

  <section class="section">
    <div class="container about-content">
      <div class="about-block">
        <h2>Кто мы</h2>
        <p>АнкерСистемы — российская инжиниринговая компания с 15-летним опытом в области геотехнического анкерования. Мы объединяем проектирование, поставку и сопровождение монтажа анкерных систем в единый цикл, что позволяет гарантировать результат на каждом объекте.</p>
        <p>Наша команда — это инженеры-геотехники, конструкторы и специалисты по производству с суммарным опытом более 100 лет. Мы работаем с объектами любой сложности: от типовых котлованов до плотин и тоннелей метрополитена.</p>
      </div>

      <div class="about-block">
        <h2>Наши преимущества</h2>
        <div class="advantages-grid">
          <div class="advantage">
            <h3>Собственное проектирование</h3>
            <p>Штат инженеров, работающих по российским и европейским нормативам. Расчёт входит в стоимость поставки.</p>
          </div>
          <div class="advantage">
            <h3>Складская программа</h3>
            <p>Стандартные позиции — со склада в Москве. Отгрузка в течение 3 рабочих дней.</p>
          </div>
          <div class="advantage">
            <h3>Сертифицированная продукция</h3>
            <p>Вся продукция сертифицирована по ГОСТ Р. Предоставляем паспорта качества и сертификаты на каждую партию.</p>
          </div>
          <div class="advantage">
            <h3>Авторский надзор</h3>
            <p>Наши инженеры присутствуют при монтаже и испытаниях. Мы отвечаем за результат от расчёта до завершения работ.</p>
          </div>
        </div>
      </div>

      <div class="about-block">
        <h2>Сертификация</h2>
        <div class="certs-grid">
          <div class="cert-item">
            <div class="cert-icon">ГОСТ Р</div>
            <span>Сертификат соответствия ГОСТ Р 58208</span>
          </div>
          <div class="cert-item">
            <div class="cert-icon">ISO 9001</div>
            <span>Система менеджмента качества</span>
          </div>
          <div class="cert-item">
            <div class="cert-icon">СРО</div>
            <span>Допуск СРО на проектирование и строительство</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CounterBlock />
  <RequestForm dark />
</template>

<style scoped>
.page-top {
  padding: 120px 0 48px;
  background: linear-gradient(135deg, #0C1929, #1A3A6B);
  color: #fff;
}
.page-top h1 { color: #fff; margin-bottom: 12px; }
.page-top p { color: rgba(255,255,255,0.7); max-width: 600px; }

.about-content { max-width: 860px; }
.about-block { margin-bottom: 48px; }
.about-block h2 { margin-bottom: 16px; }
.about-block p { color: var(--color-text-light); line-height: 1.7; margin-bottom: 12px; }

.advantages-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 16px;
}
.advantage {
  padding: 20px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}
.advantage h3 { margin-bottom: 8px; font-size: 1rem; }
.advantage p { color: var(--color-text-light); font-size: 0.9rem; margin: 0; }

.certs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
}
.cert-item {
  text-align: center;
  padding: 24px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}
.cert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(26,58,107,0.08);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 12px;
}
.cert-item span { font-size: 0.875rem; color: var(--color-text-light); }

@media (max-width: 768px) {
  .advantages-grid, .certs-grid { grid-template-columns: 1fr; }
}
</style>
