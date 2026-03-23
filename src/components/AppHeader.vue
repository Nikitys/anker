<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { applications } from '../data/products'

const menuOpen = ref(false)
const servicesOpen = ref(false)
const appsOpen = ref(false)
const isMobile = useMediaQuery('(max-width: 768px)')

function closeMenu() {
  menuOpen.value = false
  servicesOpen.value = false
  appsOpen.value = false
}

function toggleDropdown(which) {
  if (which === 'services') {
    servicesOpen.value = !servicesOpen.value
    appsOpen.value = false
  } else {
    appsOpen.value = !appsOpen.value
    servicesOpen.value = false
  }
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <router-link to="/" class="logo" @click="closeMenu">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="6" fill="#1A3A6B"/>
          <path d="M8 24L16 6L24 24" stroke="#E8A630" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="11" y1="18" x2="21" y2="18" stroke="#E8A630" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>АнкерСистемы</span>
      </router-link>

      <nav class="nav" :class="{ open: menuOpen }">
        <div class="nav-item dropdown" @mouseenter="!isMobile && (servicesOpen = true)" @mouseleave="!isMobile && (servicesOpen = false)">
          <span class="nav-link" @click="isMobile && toggleDropdown('services')">Услуги <svg width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></span>
          <div class="dropdown-menu" v-show="servicesOpen">
            <router-link to="/services/proektirovanie" @click="closeMenu">Проектирование</router-link>
            <router-link to="/services/postavka" @click="closeMenu">Поставка и комплектация</router-link>
            <router-link to="/services/montazh" @click="closeMenu">Монтажное сопровождение</router-link>
            <router-link to="/services/ispytaniya" @click="closeMenu">Испытания и мониторинг</router-link>
          </div>
        </div>
        <router-link to="/catalog" class="nav-link" @click="closeMenu">Каталог</router-link>
        <div class="nav-item dropdown" @mouseenter="!isMobile && (appsOpen = true)" @mouseleave="!isMobile && (appsOpen = false)">
          <span class="nav-link" @click="isMobile && toggleDropdown('apps')">Применение <svg width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></span>
          <div class="dropdown-menu" v-show="appsOpen">
            <router-link v-for="app in applications" :key="app.id" :to="`/applications/${app.slug}`" @click="closeMenu">{{ app.name }}</router-link>
          </div>
        </div>
        <router-link to="/projects" class="nav-link" @click="closeMenu">Проекты</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">О компании</router-link>
        <router-link to="/contacts" class="nav-link" @click="closeMenu">Контакты</router-link>
      </nav>

      <div class="header-actions">
        <a href="tel:+74951234567" class="header-phone">+7 (495) 123-45-67</a>
        <router-link to="/contacts" class="btn btn-primary btn-sm">Расчёт</router-link>
      </div>

      <button class="burger" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  height: var(--header-height);
}
.header-inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 32px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--color-primary-dark);
  flex-shrink: 0;
}
.logo:hover { color: var(--color-primary-dark); }
.nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}
.nav-link {
  padding: 8px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text);
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.nav-link:hover {
  background: rgba(26,58,107,0.06);
  color: var(--color-primary);
}
.nav-item { position: relative; }
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  padding: 8px;
  min-width: 240px;
  z-index: 100;
}
.dropdown-menu a {
  display: block;
  padding: 10px 14px;
  font-size: 0.9rem;
  color: var(--color-text);
  border-radius: 6px;
  transition: background 0.15s;
}
.dropdown-menu a:hover {
  background: rgba(26,58,107,0.06);
  color: var(--color-primary);
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}
.header-phone {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-primary-dark);
  white-space: nowrap;
}
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-primary-dark);
  transition: transform 0.3s, opacity 0.3s;
}
.burger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.burger.active span:nth-child(2) { opacity: 0; }
.burger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

@media (max-width: 1024px) {
  .header-actions .header-phone { display: none; }
}
@media (max-width: 768px) {
  .burger { display: flex; }
  .header-actions { display: none; }
  .nav {
    display: none;
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    flex-direction: column;
    padding: 24px;
    gap: 8px;
    overflow-y: auto;
  }
  .nav.open { display: flex; }
  .nav-item { width: 100%; }
  .dropdown-menu {
    position: static;
    box-shadow: none;
    padding-left: 16px;
  }
}
</style>
