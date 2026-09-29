<script setup>
import { inject } from 'vue'

const completedTasks = inject('completedTasks', [])
</script>

<template>
  <section class="finished-tasks">
    <h3>Finished Tasks</h3>

    <div v-if="completedTasks.length === 0" class="empty-state">
      No completed tasks yet.
    </div>

    <ul v-else class="task-list">
      <li v-for="task in completedTasks" :key="task.id + '-' + task.completedAt" class="task-item">
        <div class="task-main">
          <strong>{{ task.title }}</strong>
          <span>{{ task.reward }} XP</span>
        </div>
        <div class="task-meta">
          <span>{{ task.eurodollar }} €</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.finished-tasks {
  width: 100%;
  max-width: 600px;
  max-height: 300px;
  overflow-y: auto;
  padding: 1.25rem;
  border: 1px solid rgba(147,255,191,0.26);
  border-radius: 16px;
  background: rgba(147,255,191,0.26);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.finished-tasks h3 {
  margin: 0 0 1rem;
  font-size: 1.3rem;
}

.empty-state {
  color: #999;
  font-style: italic;
}

.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: rgba(147,255,191,0.26);
  border: 1px solid rgba(147,255,191,0.26);
  border-radius: 10px;
  padding: 0.75rem 0.9rem;
}

.task-main {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.task-meta {
  font-weight: 700;
  color: #fff;
}
</style>
