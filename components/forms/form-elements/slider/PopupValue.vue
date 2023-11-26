<script setup lang="ts">
import { ref } from 'vue'
const slider5 = ref(40)
</script>
<template>
  <v-slider v-model="slider5" class="mt-3" color="primary" step="1" thumb-label="always" />
</template>
