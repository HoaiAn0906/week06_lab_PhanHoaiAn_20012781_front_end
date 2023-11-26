<script setup lang="ts">
import { ref } from 'vue'
const items2 = ref([
  'The Dark Knight',
  'Control with Control',
  'Combo with Solo',
  'The Dark',
  'Fight Club',
  'demo@company.com',
  'Pulp Fiction',
])
const value = ref(['The Dark Knight'])
const multi_value = ref(['The Dark Knight', 'Fight Club'])
</script>

<template>
  <v-autocomplete
    v-model="multi_value"
    closable-chips
    color="primary"
    hide-details
    :items="items2"
    label="Outlined"
    multiple
    variant="outlined"
  >
    <template #chip>
      <v-chip class="mb-1 text-subtitle-1 font-weight-regular" color="primary" label size="large" />
    </template>
  </v-autocomplete>
</template>
