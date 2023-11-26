<script setup lang="ts">
import { ref } from 'vue'
// combo data
const value = ref(['The Dark Knight'])
const items = ref([
  'The Dark Knight',
  'Control with Control',
  'Combo with Solo',
  'The Dark',
  'Fight Club',
  'demo@company.com',
  'Pulp Fiction',
])
</script>
<template>
  <v-autocomplete v-model="value" color="primary" hide-details :items="items" variant="outlined" />
</template>
