<script setup>
import { inject } from 'vue'

const user = inject('playerStats')
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

      <p class="description">{{ user?.description ?? 'No description available' }}</p>
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

.description {
  margin: 0;
  color: #444;
  line-height: 1.5;
}
</style>

