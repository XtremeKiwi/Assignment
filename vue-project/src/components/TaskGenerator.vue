<script setup>
import { inject, ref, computed } from 'vue'

const playerStats = inject('playerStats', { currentXP: 0 })

const questPool = [
  { id: 1, title: 'Scan the neon ruins', reward: 75, description: 'Sweep the abandoned towers and clear the power grid.' },
  { id: 2, title: 'Deliver the encrypted shard', reward: 110, description: 'Carry the encoded data to the guild relay station.' },
  { id: 3, title: 'Eliminate the rogue drones', reward: 140, description: 'Clear the maintenance drones from the undercity tunnel.' },
  { id: 4, title: 'Protect the generator', reward: 160, description: 'Defend the core generator during the raid wave.' },
  { id: 5, title: 'Recover the lost memory core', reward: 190, description: 'Retrieve the ghosted artifact from the ruined lab.' },
  { id: 6, title: 'Clean the data vault', reward: 210, description: 'Wipe corruption from the guild archive before it spreads.' },
  { id: 7, title: 'Escort the courier', reward: 120, description: 'Deliver the courier through hostile rooftops and alleys.' },
  { id: 8, title: 'Defend the relay station', reward: 180, description: 'Hold the signal relay until reinforcements arrive.' },
  { id: 9, title: 'Repair the drone bay', reward: 150, description: 'Restore the damaged drone bay before the next surge.' },
  { id: 10, title: 'Unlock the hidden cache', reward: 220, description: 'Breach the locked cache beneath the abandoned market.' }
]

const activeQuests = ref([])
const currentQuestCount = computed(() => activeQuests.value.length)

function getRandomQuest() {
  const available = questPool.filter(q => !activeQuests.value.some(a => a.id === q.id))
  if (!available.length) return null
  return available[Math.floor(Math.random() * available.length)]
}

function generateQuest() {
  if (activeQuests.value.length >= 3) return

  const randomQuest = getRandomQuest()
  if (!randomQuest) return

  activeQuests.value.push({
    ...randomQuest,
    id: `${randomQuest.id}-${Date.now()}`,
    completed: false
  })
}

function completeQuest(questId) {
  const quest = activeQuests.value.find(item => item.id === questId)
  if (!quest || quest.completed) return

  quest.completed = true

  const reward = Number(quest.reward || 0)
  if (playerStats) {
    playerStats.currentXP = Number(playerStats.currentXP || 0) + reward
  }
}

function deleteQuest(questId) {
  activeQuests.value = activeQuests.value.filter(item => item.id !== questId)
}
</script>

<template>
  <section class="task-generator">
    <div class="generator-header">
      <h3>Quest Board</h3>
      <button class="generate-btn" @click="generateQuest" :disabled="currentQuestCount >= 3">
        Generate Quest
      </button>
    </div>

    <p v-if="currentQuestCount === 0" class="empty-state">No active quests.</p>

    <ul v-else class="quest-list">
      <li v-for="quest in activeQuests" :key="quest.id" class="quest-item" :class="{ completed: quest.completed }">
        <div class="quest-main">
          <h4>{{ quest.title }}</h4>
          <p>{{ quest.description }}</p>
        </div>

        <div class="quest-meta">
          <span class="reward">+{{ quest.reward }} XP</span>
          <div class="quest-actions">
            <button @click="completeQuest(quest.id)" :disabled="quest.completed">
              {{ quest.completed ? 'Completed' : 'Complete' }}
            </button>
            <button class="delete-btn" @click="deleteQuest(quest.id)">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.task-generator {
  width: 600px;
  padding: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.generator-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.generator-header h3 {
  margin: 0;
  font-size: 1.4rem;
}

.generate-btn,
.quest-actions button {
  padding: 0.6rem 0.85rem;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #222;
  cursor: pointer;
}

.generate-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.quest-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.quest-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  padding: 0.85rem 0.9rem;
}

.quest-item.completed {
  opacity: 0.75;
  border-color: #d7d7d7;
}

.quest-main {
  flex: 1;
}

.quest-main h4 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}

.quest-main p {
  margin: 0;
  font-size: 0.85rem;
  color: #555;
  line-height: 1.4;
}

.quest-meta {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  min-width: 100px;
}

.reward {
  font-weight: 700;
  color: #2d7d46;
}

.quest-actions {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.delete-btn {
  background: #f4f4f4;
}

.empty-state {
  margin: 0;
  color: #666;
  font-style: italic;
}
</style>
