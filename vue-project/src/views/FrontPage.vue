<script setup>
import Header from '../components/Header.vue'
import UserInfoFrontPage from '../components/UserInfoFrontPage.vue'
import ItemOverview from '../components/ItemOverview.vue'
import FakeChat from '../components/FakeChat.vue'
</script>

<template>
  <Header />

  <div class="front-page-layout">
    <UserInfoFrontPage />

    <div class="content-row">
      <ItemOverview />
      <FakeChat />
    </div>
  </div>
</template>

<style scoped>
.front-page-layout {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.content-row {
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
}

@media (max-width: 900px) {
  .content-row {
    flex-direction: column;
    align-items: center;
  }
}
</style>