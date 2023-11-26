<script setup lang="ts">
import { ref } from 'vue'
const items = ref(['Foo', 'Bar', 'Fizz', 'Buzz'])
</script>
<template>
  <div>
    <v-select density="compact" :items="items" label="Compact" />

    <v-select density="comfortable" :items="items" label="Comfortable" />

    <v-select hide-details :items="items" label="Default" />
  </div>
</template>
