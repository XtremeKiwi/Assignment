<script setup>
import { inject } from 'vue'

const chatData = inject('chatData', {
  users: [
    { name: 'Unknown', color: '#999', description: 'No profile available', avatar: 'https://via.placeholder.com/64' }
  ]
})

const friendIcons = {
  Thorgal: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" fill="currentColor"/></svg>',
  Mira: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 2h6v4h4v6h-4v4H9v-4H5V6h4V2zm1 6h4v2H10V8zm0 4h4v2H10v-2z" fill="currentColor"/></svg>',
  Korvax: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 8h14v8H5zM8 5h8v3H8zm1 11h6v3H9zm-4-7h2v8H5zm12 0h2v8h-2z" fill="currentColor"/></svg>',
  Sable: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l8 6v8l-8 6-8-6V8l8-6zm0 4.5L7 9.5v5l5 3.5 5-3.5v-5l-5-3z" fill="currentColor"/></svg>',
  default: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="currentColor"/></svg>'
}

function getFriendIcon(name) {
  return friendIcons[name] || friendIcons.default
}
</script>

<template>
  <section id="userFriends">
    <h3>Friends</h3>

    <ul class="friend-list">
      <li v-for="friend in chatData.users" :key="friend.name" class="friend-item">
        <div class="avatar" v-html="getFriendIcon(friend.name)" aria-hidden="true"></div>

        <div class="friend-details">
          <strong>{{ friend.name }}</strong>
          <span>{{ friend.description || 'A trusted ally in the guild.' }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
#userFriends {
  width: 600px;
  padding: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

#userFriends h3 {
  margin: 0 0 0.9rem;
  font-size: 1.4rem;
}

.friend-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.friend-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 0.8rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
}

.avatar {
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffffff;
  color: #000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.avatar svg {
  width: 28px;
  height: 28px;
  fill: #000;
  display: block;
}

.friend-details {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.friend-details strong {
  font-size: 1rem;
}

.friend-details span {
  font-size: 0.8rem;
  color: #555;
}
</style>
