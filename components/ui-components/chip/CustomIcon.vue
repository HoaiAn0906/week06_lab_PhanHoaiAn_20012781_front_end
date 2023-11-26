<script setup lang="ts">
import { ref } from 'vue'
import { MoodSmileIcon, ChecksIcon, UserCircleIcon } from 'vue-tabler-icons'
</script>
<template>
  <div class="d-flex flex-column flex-sm-row flex-wrap flex-xl-nowrap align-center gap-3">
    <v-chip color="primary">
      <mood-smile-icon class="mr-2" size="20" start />
      Custom Icon
      <checks-icon class="ml-2" size="20" start />
    </v-chip>
    <v-chip color="secondary">
      <user-circle-icon class="mr-2" size="20" start />
      Custom Icon
      <checks-icon class="ml-2" size="20" start />
    </v-chip>
  </div>
</template>
