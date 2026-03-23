import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { products } from '../data/products'

export const useCatalogStore = defineStore('catalog', () => {
  const filters = ref({
    tendonType: '',
    lifetime: '',
    extractable: '',
    loadRange: '',
    corrosionProtection: ''
  })

  const allProducts = ref(products)

  const filteredProducts = computed(() => {
    return allProducts.value.filter(p => {
      if (filters.value.tendonType && p.tendonType !== filters.value.tendonType) return false
      if (filters.value.lifetime && !p.lifetime.includes(filters.value.lifetime)) return false
      if (filters.value.extractable && p.extractable !== filters.value.extractable) return false
      if (filters.value.loadRange && p.loadRange !== filters.value.loadRange) return false
      if (filters.value.corrosionProtection && !p.corrosionProtection.includes(filters.value.corrosionProtection)) return false
      return true
    })
  })

  function resetFilters() {
    filters.value = { tendonType: '', lifetime: '', extractable: '', loadRange: '', corrosionProtection: '' }
  }

  function getProductBySlug(slug) {
    return allProducts.value.find(p => p.slug === slug)
  }

  return { filters, allProducts, filteredProducts, resetFilters, getProductBySlug }
})
