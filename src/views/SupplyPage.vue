<script setup>
import RequestForm from '../components/RequestForm.vue'
</script>

<template>
  <div class="page-top">
    <div class="container">
      <h1>Поставка и комплектация анкерных систем</h1>
      <p>Стандартные позиции — со склада в Москве. Нестандартные — от 4 недель. Полная комплектация под объект: тендоны, головки, опорные плиты, муфты, центраторы.</p>
    </div>
  </div>

  <section class="section">
    <div class="container service-content">
      <div class="service-block">
        <h2>Что входит в поставку</h2>
        <ul class="service-list">
          <li>Тендоны (стержневые, прядевые, GFRP) нарезанные в размер</li>
          <li>Анкерные головки и замковые системы</li>
          <li>Опорные плиты</li>
          <li>Соединительные муфты</li>
          <li>Центраторы и дистанционные кольца</li>
          <li>PE-оболочки и трубы для антикоррозионной защиты</li>
          <li>Цементные пакеры и инъекционные трубки</li>
          <li>Паспорта качества и сертификаты соответствия</li>
        </ul>
      </div>

      <div class="service-block">
        <h2>Складская программа</h2>
        <p>На складе в Москве постоянно поддерживается запас стержневых анкеров диаметрами 26–50 мм и комплектующих. Отгрузка стандартных позиций — в течение 3 рабочих дней. Для нестандартных заказов (специальные длины, DCP-защита, многоуровневые системы) срок производства составляет от 4 недель.</p>
      </div>

      <div class="service-block">
        <h2>Логистика</h2>
        <p>Доставка по всей территории РФ автотранспортом. Для удалённых объектов — контейнерная отправка. Упаковка обеспечивает сохранность антикоррозионного покрытия при транспортировке и хранении на площадке.</p>
      </div>
    </div>
  </section>

  <RequestForm title="Запросить коммерческое предложение" dark />
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
