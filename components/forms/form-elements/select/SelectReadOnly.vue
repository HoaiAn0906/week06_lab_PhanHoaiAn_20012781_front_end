<script setup lang="ts">
import { ref } from 'vue'
const items = ref(['Foo', 'Bar', 'Fizz', 'Buzz'])
</script>
<template>
  <div>
    <v-select hide-details :items="items" label="Select Item" readonly />
  </div>
</template>
