<script setup>
import { inject, ref } from 'vue'

const playerStats = inject('playerStats')
const clicks = ref(0)
const euroQuotes = [
  '"Show me the money!" — Jerry Maguire',
  '"In space, no one can hear you pay." — Unknown',
  '"Greed, for lack of a better word, is good." — Wall Street',
  '"Fortune favors the bold." — Ancient Proverb',
  '"The game is afoot — and so is the coin." — Neo-Noir',
  '"Money is like oxygen for civilization." — Unknown'
]
const activeQuote = ref('"Cold hard cash, baby."')

function handleClick() {
  if (!playerStats) return

  clicks.value += 1
  const randomQuote = euroQuotes[Math.floor(Math.random() * euroQuotes.length)]
  activeQuote.value = randomQuote

  const current = Number(playerStats.eurodollar || 0)
  playerStats.eurodollar = current + 5
}
</script>

<template>
  <section class="clicker-game">
    <div class="clicker-header">
      <h3>Holo-Cash Miner</h3>
      <span class="click-count">Clicks: {{ clicks }}</span>
    </div>

    <div class="currency-panel">
      <div class="currency-label">Eurodollars</div>
      <div class="currency-amount">{{ Number(playerStats?.eurodollar || 0) }}</div>
    </div>

    <button class="click-target" @click="handleClick" aria-label="Mine 5 Eurodollars">
      <span class="target-core">Mine €</span>
    </button>

    <p class="quote">{{ activeQuote }}</p>
  </section>
</template>

<style scoped>
.clicker-game {
  width: 100%;
  max-width: 1220px;
  margin: 1rem auto 0;
  padding: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: rgba(147,255,191,0.26);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.clicker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.clicker-header h3 {
  margin: 0;
  font-size: 1.4rem;
}

.click-count {
  font-weight: 700;
  color: #fff;
}

.currency-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  background: rgba(147,255,191,0.26);
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
}

.currency-label {
  color: #fff;
  font-weight: 600;
}

.currency-amount {
  font-weight: 800;
  font-size: 1.1rem;
}

.click-target {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border: 3px solid #fff;
  border-radius: 50%;
  background: rgba(255,255,255,0.02);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.08s ease, box-shadow 0.08s ease;
  margin: 0 auto;
}

.click-target:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
}

.click-target:active {
  transform: scale(0.97);
}

.target-core {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #fff;
}

.quote {
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
  color: #fff;
  min-height: 1.5em;
}
</style>