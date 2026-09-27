<script>
import { RouterLink} from 'vue-router'
</script>
<template>
  <nav id="navigation">
    <RouterLink to="/">Front Page</RouterLink>
    <RouterLink to="/operations">Operations</RouterLink>
    <RouterLink to="/userstats">UserStats</RouterLink>
  </nav>
</template>

<style scoped>
#navigation{
  width: 100vw;
  margin: auto;
  padding: 2rem;
    display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>