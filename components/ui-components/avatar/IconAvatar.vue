<script setup lang="ts">
import { ref } from 'vue'
// icons
import { MoodSmileIcon } from 'vue-tabler-icons'
</script>
<template>
  <div class="d-flex align-center gap-2 justify-center">
    <v-avatar color="primary" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
    <v-avatar color="secondary" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
    <v-avatar color="error" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
    <v-avatar color="warning" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
    <v-avatar color="success" size="40" variant="flat">
      <mood-smile-icon size="25" />
    </v-avatar>
  </div>
</template>
