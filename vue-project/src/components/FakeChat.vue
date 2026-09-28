<script setup>
import { inject, ref, onMounted, onBeforeUnmount, nextTick, computed, watch } from 'vue'

const chatData = inject('chatData', { users: [], messagesPool: [], currentUser: { name: 'You', color: '#fff' } })
const playerStats = inject('playerStats', { username: 'You' })

const displayed = ref([])
const inputValue = ref('')
const chatWindow = ref(null)
let timerId = null

const currentUserName = computed(() => playerStats?.username || 'You')

const MAX_MESSAGES = 25

function randomBetween(minMs, maxMs) {
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function pushMessage({ user, text, fromLocal = false }) {
  displayed.value.push({
    id: Date.now() + Math.random(),
    user,
    text,
    time: new Date(),
    fromLocal
  })

  if (displayed.value.length > MAX_MESSAGES) {
    displayed.value = displayed.value.slice(-MAX_MESSAGES)
  }

  nextTick(() => {
    if (chatWindow.value) {
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight
    }
  })
}

function setCurrentUserName() {
  if (chatData.currentUser) {
    chatData.currentUser.name = currentUserName.value
  }
}

function scheduleNextAuto() {
  const ms = randomBetween(2000, 8000)
  timerId = setTimeout(() => {
    const user = pickRandom(chatData.users)
    const text = pickRandom(chatData.messagesPool)
    pushMessage({ user, text })
    scheduleNextAuto()
  }, ms)
}

function sendLocalMessage() {
  const text = inputValue.value.trim()
  if (!text) return
  pushMessage({ user: chatData.currentUser, text, fromLocal: true })
  inputValue.value = ''
}

onMounted(() => {
  setCurrentUserName()

  for (let i = 0; i < 4; i++) {
    const u = pickRandom(chatData.users)
    const t = pickRandom(chatData.messagesPool)
    pushMessage({ user: u, text: t })
  }
  scheduleNextAuto()
})

watch(currentUserName, () => {
  setCurrentUserName()
})

onBeforeUnmount(() => {
  if (timerId) clearTimeout(timerId)
})
</script>

<template>
  <aside id="fakeChat">
    <header class="chat-header">Guild Chat</header>

    <div ref="chatWindow" class="chat-window">
      <div v-for="msg in displayed" :key="msg.id" class="msg" :class="{ local: msg.fromLocal }">
        <span class="meta">
          <span class="user" :style="{ color: msg.user.color }">{{ msg.user.name }}</span>
          <span class="time">{{ msg.time.toLocaleTimeString() }}</span>
        </span>
        <div class="text">{{ msg.text }}</div>
      </div>

      <div v-if="inputValue" class="msg preview">
        <span class="meta">
          <span class="user" :style="{ color: chatData.currentUser.color }">{{ chatData.currentUser.name }}</span>
          <span class="time">…</span>
        </span>
        <div class="text">{{ inputValue }}</div>
      </div>
    </div>

    <div class="chat-input">
      <input
        v-model="inputValue"
        @keydown.enter.prevent="sendLocalMessage"
        placeholder="Type a message and press Enter"
        aria-label="Chat input"
      />
      <button @click="sendLocalMessage">Send</button>
    </div>
  </aside>
</template>

<style scoped>
#fakeChat {
  width: 320px;
  height: 420px;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: #999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #222;
}

.chat-header {
  font-weight: 700;
  padding: 0.2rem 0.2rem 0.6rem 0.2rem;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 0.6rem;
  color: #222;
}

.chat-window {
  flex: 1;
  height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-right: 0.25rem;
  scroll-behavior: smooth;
}

.msg {
  background: #888;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
}

.msg.local {
  background-color: #555;
  border: 1px solid #f0d98d;
}

.msg.preview {
  opacity: 0.9;
  border-style: dashed;
}

.meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.78rem;
  margin-bottom: 0.2rem;
}

.user {
  font-weight: 700;
}

.time {
  font-size: 0.7rem;
  color: #666;
}

.text {
  font-size: 0.9rem;
  color: #fff;
  word-break: break-word;
}

.chat-input {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.6rem;
}

.chat-input input {
  flex: 1;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #222;
  box-sizing: border-box;
}

.chat-input input:focus {
  outline: none;
  border-color: #7aa8ff;
  box-shadow: 0 0 0 4px rgba(122, 168, 255, 0.08);
}

.chat-input button {
  padding: 0.45rem 0.7rem;
  border-radius: 10px;
  background: #2f2f2f;
  color: #fff;
  border: 1px solid #2f2f2f;
  cursor: pointer;
}
</style>