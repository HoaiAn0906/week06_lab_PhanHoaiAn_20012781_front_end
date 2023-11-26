<script setup lang="ts">
import { ref } from 'vue'
// icons
import { MoodSmileIcon } from 'vue-tabler-icons'
</script>
<template>
  <div class="d-flex align-center gap-2 justify-center">
    <v-avatar color="primary" rounded="sm" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
    <v-avatar color="primary" rounded="md" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
    <v-avatar color="primary" rounded="lg" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
  </div>
</template>
