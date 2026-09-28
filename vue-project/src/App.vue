<script setup>
import { reactive, provide } from 'vue'
import { RouterView } from 'vue-router'

// Provide player stats (reactive) to descendants
const playerStats = reactive({
  userImage: '/Unicorn.webp',
  username: 'PrincessUnikørn',
  class: 'Couchpotato',
  level: '12',
  currentXP: 500,
  description:
    'Princess Unikørn is not your average hacker. While most cybersecurity experts spend years mastering networking, encryption, and advanced exploit development, Princess Unikørn somehow achieves the same results through a combination of caffeine, determination, and what scientists have reluctantly classified as pure chaos.'
})

// Provide items (reactive array)
const items = reactive([
  {
    name: 'Neon Blade',
    description: 'A plasma-edged sword that hums with electric energy.',
    buyValue: 850,
    sellValue: 425,
    ability: 'Energy Slash'
  },
  {
    name: 'Cyber Injector',
    description: 'A military-grade stimpack that rapidly repairs nanites.',
    buyValue: 300,
    sellValue: 150,
    ability: 'Nano Heal'
  },
  {
    name: 'Ghost Protocol Cloak',
    description: 'An adaptive cloak that bends light around the user.',
    buyValue: 2200,
    sellValue: 1100,
    ability: 'Invisibility'
  },
  {
    name: 'Quantum Visor',
    description: 'A smart visor capable of analyzing targets in real time.',
    buyValue: 1200,
    sellValue: 600,
    ability: 'Target Scan'
  },
  {
    name: 'Pulse Shield',
    description: 'A portable energy barrier powered by fusion cells.',
    buyValue: 950,
    sellValue: 475,
    ability: 'Force Field'
  },
  {
    name: 'Neural Accelerator',
    description: 'A brain implant that boosts reflexes and reaction speed.',
    buyValue: 3000,
    sellValue: 1500,
    ability: 'Reflex Boost'
  },
  {
    name: 'EMP Grenade',
    description: 'Disables nearby electronics with a powerful pulse.',
    buyValue: 500,
    sellValue: 250,
    ability: 'System Shutdown'
  },
  {
    name: 'Data Shard',
    description: 'An encrypted storage crystal containing valuable secrets.',
    buyValue: 750,
    sellValue: 375,
    ability: 'Data Extraction'
  },
  {
    name: 'Overclock Chip',
    description: 'Increases cybernetic performance beyond safe limits.',
    buyValue: 1800,
    sellValue: 900,
    ability: 'Overclock'
  },
  {
    name: 'VoidDrive Core',
    description: 'A rare experimental power source from a forgotten megacorp.',
    buyValue: 5000,
    sellValue: 2500,
    ability: 'Warp Jump'
  }
])

// Provide a fake chat dataset (users and message pool)
const chatData = reactive({
  users: [
    { name: 'Thorgal', color: '#c79c6e' },
    { name: 'Mira', color: '#a9d6e5' },
    { name: 'Korvax', color: '#e0a7a7' },
    { name: 'Sable', color: '#b7d7a8' }
  ],
  messagesPool: [
    "Anyone up for a dungeon run?",
    "Need healer for Molten Core!",
    "Selling rare drop, whisper me",
    "Who knows the recipe for elixir of agility?",
    "That boss mechanic was wild",
    "LF tank for heroic quest",
    "Congrats on the epic loot!",
    "Meet at the inn in 10",
    "Need help with a quest item",
    "Nice roll!"
  ],
  // currentUser is the local player name shown when typing/sending
  currentUser: { name: 'You', color: '#fff07a' }
})

provide('playerStats', playerStats)
provide('items', items)
provide('chatData', chatData)
</script>

<template>
  <RouterView />
</template>
