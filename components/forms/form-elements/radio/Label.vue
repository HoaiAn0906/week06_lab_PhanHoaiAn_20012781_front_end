<script setup lang="ts">
import { ref } from 'vue'
const radioGroup3 = ref('1')
</script>
<template>
  <div class="d-flex align-center flex-column flex-sm-row">
    <v-radio-group v-model="radioGroup3" class="d-flex gap-3 justify-center" hide-details inline>
      <v-radio color="primary" label="Primary" value="1" />
      <v-radio color="primary" label="Secondary" value="2" />
      <v-radio color="primary" label="Success" value="3" />
      <v-radio color="primary" label="Warning" value="4" />
    </v-radio-group>
  </div>
</template>
