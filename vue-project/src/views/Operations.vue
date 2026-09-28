<script setup>
import Header from '../components/Header.vue'
import UserInfoOperations from '../components/UserInfoOperations.vue'
import Todo from '../components/Todo.vue'
import TaskGenerator from '../components/TaskGenerator.vue'
</script>

<template>
  <Header />

  <UserInfoOperations />

  <div class="operations-layout">
    <Todo />
    <TaskGenerator />
  </div>
</template>

<style scoped>
.operations-layout {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: flex-start;
}

@media (max-width: 1000px) {
  .operations-layout {
    flex-direction: column;
    align-items: center;
  }
}
</style>