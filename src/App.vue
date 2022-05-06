<script setup lang="ts">
</script>

<template>
  <div class="container p-4 px-2 pt-2 mx-auto font-bold bg-green-500">
    <div class="p-5 py-5 px-2">Vite + Vue + TS + Tailwind</div>
    <MyVueComponent :message="'Auto-detected components!'"></MyVueComponent>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
