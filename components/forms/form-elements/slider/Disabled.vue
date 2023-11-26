<script setup lang="ts">
import { ref } from 'vue'
const slider2 = ref(40)
</script>
<template>
  <v-slider v-model="slider2" color="primary" disabled hide-details />
</template>
