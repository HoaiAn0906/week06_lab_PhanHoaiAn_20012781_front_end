<script setup lang="ts">
import { ref } from 'vue'
const slider1 = ref(40)
const slider2 = ref(50)
const slider3 = ref(70)
const slider4 = ref(80)
const slider5 = ref(65)
</script>
<template>
  <div class="d-flex">
    <v-slider v-model="slider1" color="primary" direction="vertical" hide-details />
    <v-slider v-model="slider2" color="primary" direction="vertical" hide-details />
    <v-slider v-model="slider3" color="primary" direction="vertical" hide-details />
    <v-slider v-model="slider4" color="primary" direction="vertical" hide-details />
    <v-slider v-model="slider5" color="primary" direction="vertical" disabled hide-details />
  </div>
</template>
