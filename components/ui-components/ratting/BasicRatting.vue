<script setup lang="ts">
import { ref } from 'vue'
const rating = ref(3)
</script>
<template>
  <div>
    <v-rating v-model="rating" color="warning" density="compact" />
  </div>
</template>
