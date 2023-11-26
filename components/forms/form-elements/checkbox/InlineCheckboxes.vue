<script setup lang="ts">
import { ref } from 'vue'
const includeFiles = ref(true)
const enabled = ref(false)
</script>
<template>
  <div class="d-flex">
    <v-checkbox-btn v-model="includeFiles" class="pr-2" />
    <v-text-field hide-details label="Include files" variant="outlined" />
  </div>
  <div class="d-flex mt-3">
    <v-checkbox-btn v-model="enabled" class="pr-2" />
    <v-text-field :disabled="!enabled" hide-details label="I only work if you check the box" variant="outlined" />
  </div>
</template>
