<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav id="navigation">
    <RouterLink to="/" class="nav-link">Front Page</RouterLink>
    <RouterLink to="/operations" class="nav-link">Operations</RouterLink>
    <RouterLink to="/userstats" class="nav-link">UserStats</RouterLink>
  </nav>
</template>

<style scoped>
#navigation {
  width: 600px;
  margin: 0 auto 1.5rem auto;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #f1f1f1;
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  background: #2f2f2f;
  color: #fff;
  border-color: #2f2f2f;
}
</style>
