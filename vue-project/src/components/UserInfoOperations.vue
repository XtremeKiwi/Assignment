<script setup>
import { inject, computed } from 'vue'

const user = inject('playerStats')
const XP_MAX = 1000

const xpPercent = computed(() => {
  const xp = Number(user?.currentXP ?? 0)
  const clamped = Math.max(0, Math.min(XP_MAX, Number.isNaN(xp) ? 0 : xp))
  return Math.round((clamped / XP_MAX) * 100)
})
</script>

<template>
  <section id="userInfoOperations">
    <div class="avatar-wrap">
      <img
        v-if="user?.userImage"
        :src="user.userImage"
        :alt="`${user?.username || 'Player'} avatar`"
        class="avatar"
      />
    </div>

    <div class="details">
      <h2>{{ user?.username }}</h2>

      <div class="stats-grid">
        <div>
          <span class="label">Level</span>
          <strong>{{ user?.level }}</strong>
        </div>
        <div>
          <span class="label">Class</span>
          <strong>{{ user?.class }}</strong>
        </div>
        <div>
          <span class="label">CurrentXP</span>
          <strong>{{ user?.currentXP }}</strong>
        </div>
        <div>
          <span class="label">Eurodollars</span>
          <strong>{{ Number(user?.eurodollar || 0) }}</strong>
        </div>
      </div>

      <div class="xp-bar" role="progressbar" :aria-valuenow="user?.currentXP ?? 0" aria-valuemin="0" aria-valuemax="1000">
        <div class="xp-fill" :style="{ width: xpPercent + '%' }"></div>
        <div class="xp-label">{{ user?.currentXP ?? 0 }} / 1000 XP</div>

        <div class="xp-tooltip" aria-hidden="true">
          {{ xpPercent }}%
          <span class="xp-tooltip-arrow" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#userInfoOperations {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.avatar-wrap {
  flex-shrink: 0;
}

.avatar {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

.details {
  flex: 1;
  min-width: 0;
}

.details h2 {
  margin: 0 0 0.75rem;
  font-size: 1.7rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.stats-grid div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: #ffffff;
  border-radius: 10px;
  padding: 0.6rem 0.7rem;
}

.label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #666;
}

strong {
  font-size: 1rem;
}

.xp-bar {
  position: relative;
  width: 100%;
  height: 14px;
  background: linear-gradient(180deg, #ececec, #f6f6f6);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 0.25rem;
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

.xp-tooltip {
  position: absolute;
  left: 50%;
  top: -34px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;
  pointer-events: none;
  white-space: nowrap;
}

.xp-bar:hover .xp-tooltip {
  opacity: 1;
  visibility: visible;
}

.xp-tooltip-arrow {
  position: absolute;
  left: 50%;
  bottom: -6px;
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.85);
  transform: translateX(-50%) rotate(45deg);
}

@media (max-width: 700px) {
  #userInfoOperations {
    flex-direction: column;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
