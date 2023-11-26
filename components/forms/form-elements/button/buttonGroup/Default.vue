<script setup lang="ts">
import { ref } from 'vue'
const toggle = ref(null)
</script>
<template>
  <div class="d-flex justify-center">
    <v-btn-toggle v-model="toggle" class="text-center" color="primary">
      <v-btn icon="mdi-format-align-left" />
      <v-btn icon="mdi-format-align-center" />
      <v-btn icon="mdi-format-align-right" />
      <v-btn icon="mdi-format-align-justify" />
    </v-btn-toggle>
  </div>
</template>
