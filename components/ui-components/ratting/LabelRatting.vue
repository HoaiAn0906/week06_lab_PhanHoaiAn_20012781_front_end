<script setup lang="ts">
import { ref } from 'vue'
const rating6 = ref(3)
const rating7 = ref(2)
</script>
<template>
  <div>
    <v-rating
      v-model="rating6"
      color="warning"
      density="compact"
      hover
      item-label-position="top"
      :item-labels="['sad', '', '', '', 'happy']"
    />
    <v-rating v-model="rating6" class="mb-0 d-block" color="warning" density="compact" hover />
  </div>
</template>
