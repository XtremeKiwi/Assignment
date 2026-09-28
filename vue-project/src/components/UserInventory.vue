<script setup>
import { inject, computed } from 'vue'

const allItems = inject('items', [])

const MAX_ITEMS = 25
const iconMap = {
  'Energy Slash': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" fill="currentColor"/></svg>`,
  'Nano Heal': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" fill="currentColor"/></svg>`,
  Invisibility: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C7 5 2.7 8.11 1 12c1.7 3.89 6 7 11 7s9.3-3.11 11-7c-1.7-3.89-6-7-11-7zm0 11a4 4 0 110-8 4 4 0 010 8z" fill="currentColor"/></svg>`,
  'Target Scan': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6v2m0 18v-2M4 12H2m20 0h-2M5 5l-1.5-1.5M20 20l1.5 1.5M5 19L3.5 20.5M20 4l1.5-1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  'Force Field': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l7 4v6a7 7 0 11-14 0V6l7-4z" fill="currentColor"/></svg>`,
  'Reflex Boost': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l3 3 4-4 4 4 7-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  'System Shutdown': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 7v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'Data Extraction': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 8h8M8 12h5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  Overclock: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M12 3v18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  'Warp Jump': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12l10-6v12L2 12zm20 0l-10-6v12l10-6z" fill="currentColor"/></svg>`,
  'Signal Boost': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c3-6 9-8 9-8v16s-6-2-9-8zM14 12c1.5-3 4.5-4 4.5-4v8s-3-1-4.5-4z" fill="currentColor"/></svg>`,
  'Thermal Spike': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2s2 3 1 5 3 2 3 6-3 7-6 9c0 0 1-4-2-6 0 0 3-2 2-6 0 0-2-3 2-8z" fill="currentColor"/></svg>`,
  'EMP Pulse': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4M12 18v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M2 12h4M18 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  'Power Guard': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 12h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'Nano Repair': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  default: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="currentColor"/></svg>`
}

function getItemIcon(item) {
  return iconMap[item.ability] || iconMap.default
}

function pickRandomItems(items, count) {
  const shuffled = [...items].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

const inventory = computed(() => pickRandomItems(allItems, MAX_ITEMS))
</script>

<template>
  <section id="userInventory">
    <h3>Inventory</h3>

    <div class="inventory-grid">
      <div
        v-for="item in inventory"
        :key="`${item.name}-${Math.random()}`"
        class="inventory-slot"
        :title="`${item.name}\nAbility: ${item.ability}\nBuy: ${item.buyValue}\nSell: ${item.sellValue}\n${item.description}`"
      >
        <div class="slot-icon" aria-hidden="true" v-html="getItemIcon(item)"></div>

        <div class="slot-tooltip">
          <strong>{{ item.name }}</strong>
          <span>Ability: {{ item.ability }}</span>
          <span>Buy: {{ item.buyValue }}</span>
          <span>Sell: {{ item.sellValue }}</span>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#userInventory {
  width: 600px;
  padding: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

#userInventory h3 {
  margin: 0 0 0.9rem 0;
  font-size: 1.4rem;
}

.inventory-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.65rem;
}

.inventory-slot {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  background: linear-gradient(180deg, #ffffff 0%, #f3f3f3 100%);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.inventory-slot:hover {
  transform: translateY(-2px);
  border-color: #a0b8ff;
}

.slot-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: #ffffff; /* explicit white background */
  color: #000; /* ensure icons render black */
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

.slot-icon svg {
  width: 28px;
  height: 28px;
  display: block;
  fill: #000; /* force black fill */
  stroke: #000; /* force black stroke where used */
}
.inventory-slot:hover .slot-tooltip,
.inventory-slot:focus-within .slot-tooltip {
  opacity: 1;
  visibility: visible;
}

.slot-tooltip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translateX(-50%);
  width: 220px;
  background: rgba(23, 23, 23, 0.96);
  color: #fff;
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: left;
  pointer-events: none; /* avoid tooltip stealing hover */
}

.slot-tooltip svg {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 8px;
  fill: currentColor;
}
.slot-tooltip strong {
  font-size: 0.9rem;
  color: #ffd86b;
}

.slot-tooltip span,
.slot-tooltip p {
  font-size: 0.75rem;
  color: #eaeaea;
  margin: 0;
}

.slot-tooltip p {
  line-height: 1.35;
  margin-top: 0.15rem;
}
</style>
