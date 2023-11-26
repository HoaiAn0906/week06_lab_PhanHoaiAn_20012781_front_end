<script setup lang="ts">
import { ref } from 'vue'
const radioColumn = ref('1')
</script>
<template>
  <div class="d-flex gap-3 align-center flex-column flex-sm-row">
    <v-radio-group v-model="radioColumn" column hide-details>
      <v-radio color="primary" label="Option 1" value="1" />
      <v-radio color="primary" label="Option 2" value="2" />
    </v-radio-group>
  </div>
</template>
