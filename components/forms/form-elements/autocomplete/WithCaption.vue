<script setup lang="ts">
import { ref } from 'vue'
// combo data
const items = ref([
  'The Dark Knight',
  'Control with Control',
  'Combo with Solo',
  'The Dark',
  'Fight Club',
  'demo@company.com',
  'Pulp Fiction',
])
const value = ref(['The Dark Knight'])
const cap_value = ref(['demo@company.com'])
const cap_value2 = ref(['demo@company.com'])
const multi_value = ref(['The Dark Knight', 'Fight Club'])
</script>
<template>
  <v-autocomplete
    v-model="cap_value"
    color="primary"
    hide-details
    :items="items"
    label="Email Address"
    variant="outlined"
  />

  <v-autocomplete
    v-model="cap_value2"
    class="mt-5"
    color="primary"
    hide-details
    :items="items"
    label="Email Address"
    variant="outlined"
  >
    <template #prepend-inner>
      <MailIcon size="22" stroke-width="1.5" />
    </template>
  </v-autocomplete>
</template>
