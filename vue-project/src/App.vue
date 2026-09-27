<script setup>
import { reactive, provide } from 'vue'
import { RouterView } from 'vue-router'
import userImage from '../public/Unicorn.jpg';

const playerStats = reactive({
    userImage: userImage,
    username: 'PrincessUnikørn',
    class: 'Couchpotato',
    level: '12',
    currentXP: 500,
    description: 'I am terror, I am death, I am PRINCESS UNIKØRN!'
})

provide('playerStats', playerStats)
</script>

<template>
    <RouterView />
</template>
