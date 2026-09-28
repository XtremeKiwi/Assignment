<script setup>
import { inject, ref, nextTick, watch, computed } from 'vue'

const user = inject('playerStats')

const editing = ref(false)
const editValue = ref(user?.description ?? '')
const inputRef = ref(null)

// XP constants
const XP_MAX = 1000

// computed percent for progress bar (0-100)
const xpPercent = computed(() => {
  const xp = Number(user?.currentXP ?? 0)
  const clamped = Math.max(0, Math.min(XP_MAX, isNaN(xp) ? 0 : xp))
  return Math.round((clamped / XP_MAX) * 100)
})

// keep editValue in sync if external changes and not currently editing
watch(() => user?.description, (val) => {
  if (!editing.value) editValue.value = val ?? ''
})

function startEdit() {
  editing.value = true
  editValue.value = user?.description ?? ''
  nextTick(() => {
    if (inputRef.value) inputRef.value.focus()
  })
}

function saveEdit() {
  if (user) {
    user.description = editValue.value
  }
  editing.value = false
}

function cancelEdit() {
  editValue.value = user?.description ?? ''
  editing.value = false
}
</script>

<template>
  <section id="userInfo">
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
      </div>

      <!-- XP progress bar -->
      <div class="xp-bar" role="progressbar" :aria-valuenow="user?.currentXP ?? 0" aria-valuemin="0" aria-valuemax="1000">
        <div class="xp-fill" :style="{ width: xpPercent + '%' }"></div>
        <div class="xp-label">{{ user?.currentXP ?? 0 }} / 1000 XP</div>

        <!-- tooltip showing percentage on hover -->
        <div class="xp-tooltip" aria-hidden="true">
          {{ xpPercent }}%
          <span class="xp-tooltip-arrow" aria-hidden="true"></span>
        </div>
      </div>

      <div class="description-row">
        <template v-if="!editing">
          <p class="description">{{ user?.description ?? 'No description available' }}</p>
          <button class="edit-btn" @click="startEdit" aria-label="Edit description">Edit</button>
        </template>

        <template v-else>
          <input
            ref="inputRef"
            class="description-input"
            v-model="editValue"
            @keydown.enter.prevent="saveEdit"
            @keydown.esc.prevent="cancelEdit"
            aria-label="Edit description input"
          />
          <button class="save-btn" @click="saveEdit">Save</button>
          <button class="cancel-btn" @click="cancelEdit">Cancel</button>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
#userInfo {
  width: 600px;
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
  grid-template-columns: repeat(3, minmax(100px, 1fr));
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

/* XP bar */
.xp-bar {
  position: relative;
  width: 100%;
  height: 14px;
  background: linear-gradient(180deg, #ececec, #f6f6f6);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 0.9rem;
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

/* tooltip */
.xp-tooltip {
  position: absolute;
  left: 50%;
  top: -34px;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.85);
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

.xp-tooltip-arrow {
  position: absolute;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0,0,0,0.85);
}

.xp-bar:hover .xp-tooltip,
.xp-bar:focus-within .xp-tooltip {
  opacity: 1;
  visibility: visible;
}

.description-row {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.description {
  margin: 0;
  color: #444;
  line-height: 1.5;
}

.description-input {
  flex: 1;
  padding: 0.5rem 0.6rem;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
}

.edit-btn,
.save-btn,
.cancel-btn {
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
  cursor: pointer;
}

.edit-btn:hover,
.save-btn:hover,
.cancel-btn:hover {
  transform: translateY(-1px);
}

.cancel-btn {
  background: #f8f8f8;
}
</style>

