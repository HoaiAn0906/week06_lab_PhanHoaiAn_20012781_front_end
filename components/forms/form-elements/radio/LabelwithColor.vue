<script setup lang="ts">
import { ref } from 'vue'
const radioColors = ref('1')
// radio color data
const radioColor = ref(['primary', 'secondary', 'success', 'error'])
</script>
<template>
  <div class="">
    <v-radio-group
      v-model="radioColors"
      class="d-flex gap-3 justify-center align-center flex-column flex-sm-row"
      inline
    >
      <v-radio v-for="btn in radioColor" :key="btn" :color="btn" hide-details :label="btn" value="1" />
    </v-radio-group>
  </div>
</template>
