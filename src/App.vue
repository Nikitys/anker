<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
  <div class="sticky-cta-mobile">
    <router-link to="/contacts" class="btn btn-primary">Получить расчёт</router-link>
  </div>
</template>
