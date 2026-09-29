<script setup>
import { inject } from 'vue'

const playerStats = inject('playerStats')
</script>

<template>
  <div class="wallet-card">
    <span class="wallet-label">Eurodollars</span>
    <strong>{{ Number(playerStats?.eurodollar || 0) }}</strong>
  </div>
</template>

<style scoped>
.wallet-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  max-width: 240px;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(147,255,191,0.26);
  border-radius: 12px;
  background: rgba(147,255,191,0.26);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}

.wallet-label {
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
}

strong {
  font-size: 1.1rem;
}
</style>
