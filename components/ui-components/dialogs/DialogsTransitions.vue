<script setup lang="ts">
import { ref } from 'vue'
const dialog = ref(false)
</script>

<template>
  <div class="text-center">
    <v-dialog transition="dialog-bottom-transition">
      <template #activator="{ props }">
        <v-btn class="w-100" color="success" v-bind="props" flat>Open Transition Dialog</v-btn>
      </template>
      <template #default="{ isActive }">
        <v-card>
          <v-toolbar class="px-4" color="primary">Opening from the bottom</v-toolbar>
          <v-card-item>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-item>
          <v-card-actions class="justify-end">
            <v-btn flat variant="flat" @click="isActive.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
