<script setup>
import { inject, ref, computed } from 'vue'

const playerStats = inject('playerStats')
const clicks = ref(0)
const quotePool = [
  '"The answer is out there, Neo." — The Matrix',
  '"I can see it now — the Matrix is everywhere." — The Matrix',
  '"I am inevitable." — Avengers: Infinity War',
  '"Houston, we have a problem." — Apollo 13',
  '"All those moments will be lost in time, like tears in rain." — Blade Runner',
  '"Stay hungry, stay foolish." — Steve Jobs',
  '"I have a bad feeling about this." — Star Wars',
  '"The only way to do great work is to love what you do." — Steve Jobs',
  '"You have to let it all go, Neo. Fear, doubt, and disbelief." — The Matrix'
]

const activeQuote = ref('"Reality is a thing of the mind."')
const XP_MAX = 1000

const xpPercent = computed(() => {
  const xp = Number(playerStats?.currentXP ?? 0)
  const clamped = Math.max(0, Math.min(XP_MAX, Number.isNaN(xp) ? 0 : xp))
  return Math.round((clamped / XP_MAX) * 100)
})

function handleClick() {
  if (!playerStats) return

  clicks.value += 1
  const randomQuote = quotePool[Math.floor(Math.random() * quotePool.length)]
  activeQuote.value = randomQuote

  const current = Number(playerStats.currentXP || 0)
  const nextXP = current + 10

  if (nextXP >= 1000) {
    playerStats.level = Number(playerStats.level || 1) + 1
    playerStats.currentXP = 0
    return
  }

  playerStats.currentXP = nextXP
}
</script>

<template>
  <section class="clicker-game">
    <div class="clicker-header">
      <h3>Hack the Matrix</h3>
      <span class="click-count">Clicks: {{ clicks }}</span>
    </div>

    <div class="xp-panel">
      <div class="xp-bar" role="progressbar" :aria-valuenow="playerStats?.currentXP ?? 0" aria-valuemin="0" aria-valuemax="1000">
        <div class="xp-fill" :style="{ width: xpPercent + '%' }"></div>
        <div class="xp-label">{{ playerStats?.currentXP ?? 0 }} / 1000 XP</div>
      </div>
    </div>

    <button class="click-target" @click="handleClick" aria-label="Hack the Matrix">
      <span class="target-core">Hack the Matrix</span>
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
  background: #f9f9f9;
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
  color: #333;
}

.xp-panel {
  margin-bottom: 1rem;
}

.xp-bar {
  position: relative;
  width: 100%;
  height: 14px;
  background: linear-gradient(180deg, #ececec, #f6f6f6);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.xp-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffd86b, #f0c14b);
  transition: width 0.25s ease;
}

.xp-label {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  color: #333;
  font-weight: 600;
}

.click-target {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border: 3px solid #111;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffffff 0%, #f0f0f0 18%, #d9d9d9 100%);
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
  color: #111;
}

.quote {
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
  color: #444;
  min-height: 1.5em;
}
</style>
