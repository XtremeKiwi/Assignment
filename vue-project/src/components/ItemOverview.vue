<script setup>
import { inject, ref, computed } from 'vue'
import ItemSearch from './ItemSearch.vue'

// Inject the items array provided by App.vue
const items = inject('items', [])

// Local search model
const search = ref('')

const term = computed(() => search.value.trim().toLowerCase())

// Filtered items shown in the list (live filter)
const filteredItems = computed(() => {
  if (!term.value) return items

  return items.filter(item => {
    return (
      (item.name && item.name.toLowerCase().includes(term.value)) ||
      (item.description && item.description.toLowerCase().includes(term.value)) ||
      (item.ability && item.ability.toLowerCase().includes(term.value))
    )
  })
})

// Suggestions based on name match (for dropdown)
const suggestions = computed(() => {
  if (!term.value) return []
  return items
    .filter(i => i.name && i.name.toLowerCase().includes(term.value))
    .map(i => i.name)
    .slice(0, 6)
})

function isSuggested(item) {
  if (!term.value) return false
  return (
    (item.name && item.name.toLowerCase().includes(term.value)) ||
    (item.ability && item.ability.toLowerCase().includes(term.value))
  )
}

function applySuggestion(s) {
  search.value = s
}
</script>

<template>
  <section id="itemOverview">
    <h2 class="title">Available Items</h2>

    <ItemSearch v-model="search" />

    <ul v-if="suggestions.length" class="suggestions">
      <li v-for="s in suggestions" :key="s" class="suggestion-item" @click="applySuggestion(s)">
        {{ s }}
      </li>
    </ul>

    <ul class="item-list">
      <li class="item-card" v-for="item in filteredItems" :key="item.name" :class="{ suggested: isSuggested(item) }">
        <div class="item-main">
          <h3 class="item-name">{{ item.name }}</h3>
          <p class="item-desc">{{ item.description }}</p>
        </div>

        <div class="item-meta">
          <div class="meta-row"><span class="meta-label">Ability</span><strong>{{ item.ability }}</strong></div>
          <div class="meta-row"><span class="meta-label">Buy</span><strong>{{ item.buyValue }}</strong></div>
          <div class="meta-row"><span class="meta-label">Sell</span><strong>{{ item.sellValue }}</strong></div>
        </div>
      </li>
    </ul>

    <p v-if="filteredItems.length === 0" class="empty">No items match your search</p>
  </section>
</template>

<style scoped>
#itemOverview {
  width: 600px;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.title {
  margin: 0 0 0.75rem 0;
  font-size: 1.3rem;
}

.suggestions {
  list-style: none;
  margin: 0 0 0.6rem 0;
  padding: 0.2rem;
  background: transparent;
}

.suggestion-item {
  padding: 0.45rem 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  color: #333;
}

.suggestion-item:hover {
  background: #f1f1f1;
}

.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
}

.item-card {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  background: #fff;
  padding: 0.7rem;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  transition: all 0.18s ease;
}

.item-card.suggested {
  border-color: #f0bb3a;
  background: linear-gradient(180deg, #fffaf0 0%, #fffef7 100%);
  box-shadow: 0 6px 18px rgba(240, 187, 58, 0.08);
  transform: translateY(-2px);
}

.item-main {
  min-width: 0;
}

.item-name {
  margin: 0 0 0.15rem 0;
  font-size: 1rem;
}

.item-desc {
  margin: 0;
  color: #555;
  font-size: 0.82rem;
  line-height: 1.3;
  max-height: 2.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.35rem;
}

.meta-row {
  background: #fafafa;
  padding: 0.33rem 0.4rem;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  text-align: center;
}

.meta-label {
  display: block;
  font-size: 0.62rem;
  color: #777;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.empty {
  margin-top: 0.75rem;
  color: #666;
  font-style: italic;
}
</style>