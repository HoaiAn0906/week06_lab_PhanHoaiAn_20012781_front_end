<script setup lang="ts">
import { ref } from 'vue'
const rating7 = ref(3.5)
</script>
<template>
  <div>
    <v-rating
      v-model="rating7"
      class="d-block mb-4"
      color="error"
      density="compact"
      empty-icon="mdi-heart-outline"
      full-icon="mdi-heart"
      half-icon="mdi-heart-half"
      half-increments
      hover
    />
    <v-rating
      v-model="rating7"
      class="d-block mb-4"
      color="primary"
      density="compact"
      empty-icon="mdi-circle-outline"
      full-icon="mdi-circle"
      half-icon="mdi-circle-half"
      half-increments
      hover
    />
  </div>
</template>
