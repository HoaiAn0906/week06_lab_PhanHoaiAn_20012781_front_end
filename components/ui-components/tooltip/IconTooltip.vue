<script setup lang="ts">
import { ref } from 'vue'
import { HeartIcon, MoodSmileIcon, UserIcon } from 'vue-tabler-icons'
</script>
<template>
  <div class="d-flex gap-3 justify-center">
    <v-avatar size="35">
      <v-btn class="rounded-circle" color="primary" flat>
        <user-icon size="22" />
        <v-tooltip activator="parent" location="start">primary</v-tooltip>
      </v-btn>
    </v-avatar>
    <v-avatar size="35">
      <v-btn class="rounded-circle" color="secondary" flat>
        <heart-icon color="white" size="22" />
        <v-tooltip activator="parent" location="top">secondary</v-tooltip>
      </v-btn>
    </v-avatar>
    <v-avatar size="35">
      <v-btn class="rounded-circle" color="warning" flat>
        <mood-smile-icon color="white" size="22" />
        <v-tooltip activator="parent" location="end">warning</v-tooltip>
      </v-btn>
    </v-avatar>
    <v-avatar size="35">
      <v-btn class="rounded-circle" color="error" flat>
        <heart-icon size="22" />
        <v-tooltip activator="parent" location="bottom">error</v-tooltip>
      </v-btn>
    </v-avatar>
  </div>
</template>
