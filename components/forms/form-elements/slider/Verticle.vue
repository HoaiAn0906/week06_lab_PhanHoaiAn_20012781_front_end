<script setup lang="ts">
import { ref } from 'vue'
const slider7 = ref(40)
const slider8 = ref(40)
</script>
<template>
  <div class="d-flex">
    <v-slider v-model="slider7" color="primary" direction="vertical" label="Regular" />
    <v-slider v-model="slider8" color="primary" direction="vertical" disabled label="Regular" />
  </div>
</template>
