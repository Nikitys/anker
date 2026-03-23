import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomePage.vue') },
  { path: '/catalog', name: 'catalog', component: () => import('../views/CatalogPage.vue') },
  { path: '/catalog/:slug', name: 'product', component: () => import('../views/ProductPage.vue') },
  { path: '/services/proektirovanie', name: 'engineering', component: () => import('../views/EngineeringPage.vue') },
  { path: '/services/postavka', name: 'supply', component: () => import('../views/SupplyPage.vue') },
  { path: '/services/montazh', name: 'installation', component: () => import('../views/InstallationPage.vue') },
  { path: '/services/ispytaniya', name: 'testing', component: () => import('../views/TestingPage.vue') },
  { path: '/applications/:slug', name: 'application', component: () => import('../views/ApplicationPage.vue') },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsPage.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutPage.vue') },
  { path: '/contacts', name: 'contacts', component: () => import('../views/ContactsPage.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
