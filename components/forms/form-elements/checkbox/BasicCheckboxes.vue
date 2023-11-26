<script setup lang="ts">
import { ref } from 'vue'
const checkbox = ref(true)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
</script>
<template>
  <div class="d-flex gap-3 justify-center align-center flex-column flex-sm-row">
    <v-checkbox-btn v-model="checkbox" color="primary" hide-details label="Primary" />
    <v-checkbox-btn v-model="checkbox2" color="primary" hide-details label="Secondary" />
    <v-checkbox-btn v-model="checkbox3" color="primary" hide-details label="Success" />
    <v-checkbox-btn v-model="checkbox4" color="primary" hide-details label="Warning" />
  </div>
</template>
