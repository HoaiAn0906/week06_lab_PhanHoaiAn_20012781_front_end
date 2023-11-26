<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)
const unchecked = ref(false)
</script>
<template>
  <div class="d-flex gap-3 justify-center align-center flex-column flex-sm-row">
    <v-checkbox-btn v-model="checked" color="primary" hide-details label="Checked" />
    <v-checkbox-btn v-model="unchecked" color="primary" disabled hide-details label="Unchecked" />
  </div>
</template>
