<script setup lang="ts">
import { ref } from 'vue'
const files = ref([])
</script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Selection Slot -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-file-input
      v-model="files"
      hide-details="auto"
      label="File input"
      multiple
      placeholder="Upload your documents"
      prepend-icon="mdi-paperclip"
      variant="outlined"
    >
      <template #selection="{ fileNames }">
        <template v-for="fileName in fileNames" :key="fileName">
          <v-chip class="mr-2" color="primary" label size="small">
            {{ fileName }}
          </v-chip>
        </template>
      </template>
    </v-file-input>
  </div>
</template>
