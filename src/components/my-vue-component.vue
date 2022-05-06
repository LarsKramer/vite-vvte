<template>
  <div>
    {{ props.message }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  message: string;
}>();


</script>

<style scoped>
</style>