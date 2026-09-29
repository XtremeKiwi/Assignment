<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = inject('playerStats', {
  username: 'Unknown',
  level: '0',
  currentXP: 0,
  class: 'Unknown',
  userImage: ''
})

function goToUserStats() {
  router.push('/userstats')
}
</script>

<template>
  <section id="userInfoFrontPage" @click="goToUserStats" role="button" tabindex="0" @keydown.enter="goToUserStats" @keydown.space.prevent="goToUserStats">
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
    </div>
  </section>
</template>

<style scoped>
#userInfoFrontPage {
  width: 600px;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  border: 1px solid rgba(147,255,191,0.26);
  border-radius: 16px;
  background: rgba(255,255,255,0.06);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

#userInfoFrontPage:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

#userInfoFrontPage:focus {
  outline: 2px solid #7aa8ff;
  outline-offset: 2px;
}

.avatar-wrap {
  flex-shrink: 0;
}

.avatar {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(147,255,191,0.26);
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
}

.stats-grid div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: rgba(255,255,255,0.06);
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
    color: #fff;
}
</style>
