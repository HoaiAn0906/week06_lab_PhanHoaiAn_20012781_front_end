<script setup lang="ts">
import { ref } from 'vue'
const slider1 = ref(50)
</script>
<template>
  <v-slider v-model="slider1" color="primary" hide-details />
</template>
