<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <v-btn class="w-100" color="primary" flat>
      Open Simple Dialog
      <v-dialog v-model="dialog" activator="parent">
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" flat @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
