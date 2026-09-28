<script setup>
import Header from '../components/Header.vue'
import UserInfo from '../components/UserInfo.vue'
import UserInventory from '../components/UserInventory.vue'
import UserFriends from '../components/UserFriends.vue'
</script>

<template>
  <Header />

  <div class="user-stats-grid">
    <div class="left-column">
      <UserInfo />
      <UserFriends />
    </div>

    <div class="right-column">
      <UserInventory />
    </div>
  </div>
</template>

<style scoped>
.user-stats-grid {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 600px) minmax(0, 600px);
  gap: 1rem;
  justify-content: center;
  align-items: start;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 1000px) {
  .user-stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>