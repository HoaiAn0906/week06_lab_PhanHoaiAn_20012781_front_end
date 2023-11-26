<script setup lang="ts">
import { ref } from 'vue'
const slider6 = ref(40)
</script>
<template>
  <v-slider v-model="slider6" class="mt-3" color="primary" show-ticks="always" step="10" thumb-label="always" />
</template>
