<script setup lang="ts">
import { ref } from 'vue'
const radioGroup3 = ref('1')
</script>
<template>
  <div class="d-flex justify-center align-center flex-column flex-sm-row">
    <v-radio-group v-model="radioGroup3" class="d-flex gap-3 justify-center" hide-details inline>
      <v-radio color="primary" label="Option 1" value="1" />
      <v-radio color="primary" label="Option 2" value="2" />
      <v-radio color="primary" label="Option 3" value="3" />
      <v-radio color="primary" label="Option 4" value="4" />
      <v-radio color="primary" label="Option 5" value="5" />
      <v-radio color="primary" label="Option 6" value="6" />
      <v-radio color="primary" label="Option 7" value="7" />
      <v-radio color="primary" label="Option 8" value="8" />
    </v-radio-group>
  </div>
</template>
