<script setup>
import { inject, ref, computed } from 'vue'

const playerStats = inject('playerStats', { currentXP: 0, eurodollar: 0 })

// Use the centralized quest pool provided by App.vue
const quests = inject('quests', [])
const completedTasks = inject('completedTasks', [])

const activeQuests = ref([])
const currentQuestCount = computed(() => activeQuests.value.length)

function getRandomQuest() {
  const available = quests.filter(q => !activeQuests.value.some(a => a.id === q.id))
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
  if (!quest) return

  const reward = Number(quest.reward || 0)
  if (playerStats) {
  const currentXP = Number(playerStats.currentXP || 0)
  const nextXP = currentXP + reward

  if (nextXP >= 1000) {
    playerStats.level = Number(playerStats.level || 1) + 1
    playerStats.currentXP = 0
  } else {
    playerStats.currentXP = nextXP
  }

  const currentEuro = Number(playerStats.eurodollar || 0)
  playerStats.eurodollar = currentEuro + Math.max(10, Math.round(reward / 10))
  }

  const taskRecord = {
  id: quest.id,
  title: quest.title,
  reward: quest.reward,
  eurodollar: Math.max(10, Math.round((quest.reward || 0) / 10)),
  completedAt: new Date().toISOString()
  }

  if (completedTasks && !completedTasks.some(item => item.id === taskRecord.id)) {
  completedTasks.push(taskRecord)
  }

  // Remove it immediately so it can be generated again later.
  deleteQuest(questId)
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
          <span class="bonus">+{{ Math.max(10, Math.round((quest.reward || 0) / 10)) }} €</span>
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

.bonus {
  font-weight: 700;
  color: #0d6b7f;
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
