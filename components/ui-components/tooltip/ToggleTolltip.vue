<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>
<template>
  <div class="d-flex">
    <v-btn color="primary" flat @click="show = !show">
      {{ !show ? 'Show Tooltip' : 'Hide Tooltip' }}
    </v-btn>
    <v-tooltip v-model="show" top>
      <template #activator="{ props }">
        <v-btn v-bind="props" class="ml-6" color="primary" flat icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>
      <span>Programmatic tooltip</span>
    </v-tooltip>
  </div>
</template>
