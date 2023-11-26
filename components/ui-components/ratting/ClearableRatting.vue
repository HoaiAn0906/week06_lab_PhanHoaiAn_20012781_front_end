<script setup lang="ts">
import { ref } from 'vue'
const rating3 = ref(3)
</script>
<template>
  <div>
    <v-rating v-model="rating3" clearable color="warning" density="compact" />
  </div>
</template>
