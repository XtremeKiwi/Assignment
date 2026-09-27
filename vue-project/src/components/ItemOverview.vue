<script setup>
import { inject } from 'vue'

const items = inject('items', [])
</script>

<template>
  <section id="itemOverview">
    <h2 class="title">Available Items</h2>

    <ul class="item-list">
      <li class="item-card" v-for="item in items" :key="item.name">
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

    <p v-if="items.length === 0" class="empty">No items available</p>
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

.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.item-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #fff;
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
}

.item-main {
  min-width: 0;
}

.item-name {
  margin: 0 0 0.2rem 0;
  font-size: 1rem;
}

.item-desc {
  margin: 0;
  color: #555;
  font-size: 0.8rem;
  line-height: 1.4;
}

.item-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.35rem;
}

.meta-row {
  background: #fafafa;
  padding: 0.35rem 0.4rem;
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

strong {
  font-size: 0.76rem;
}

.empty {
  margin-top: 0.75rem;
  color: #666;
  font-style: italic;
}
</style>