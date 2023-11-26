<script setup lang="ts">
import { ref } from 'vue'
// icons
import { Volume2Icon, VolumeIcon } from 'vue-tabler-icons'
const volume = ref(40)
</script>
<template>
  <v-slider v-model="volume" color="primary" hide-details>
    <template #prepend>
      <volume2-icon size="20" stroke-width="1.5" />
    </template>
    <template #append>
      <volume-icon size="20" stroke-width="1.5" />
    </template>
  </v-slider>
</template>
