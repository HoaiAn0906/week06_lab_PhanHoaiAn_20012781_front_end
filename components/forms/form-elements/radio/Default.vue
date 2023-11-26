<script setup lang="ts">
import { ref } from 'vue'
const radioGroup = ref('1')
</script>
<template>
  <div class="d-flex gap-3 align-center flex-column flex-sm-row">
    <v-radio-group v-model="radioGroup" class="d-flex justify-center" hide-details inline>
      <v-radio color="primary" value="1" />
      <v-radio color="primary" disabled value="3" />
      <v-radio color="primary" value="2" />
    </v-radio-group>
  </div>
</template>
