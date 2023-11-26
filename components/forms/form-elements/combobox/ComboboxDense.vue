<script setup lang="ts">
import { ref } from 'vue'
const values = ref('foo')
const items = ref(['Programming', 'Design', 'Vue', 'Vuetify'])
</script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dense -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-row>
      <v-col cols="12">
        <v-combobox v-model="values" hide-details :items="items" label="Default" />
      </v-col>
      <v-col cols="12">
        <v-combobox v-model="values" density="comfortable" hide-details :items="items" label="Comfortable" />
      </v-col>
      <v-col cols="12">
        <v-combobox v-model="values" density="compact" hide-details :items="items" label="Compact" />
      </v-col>
    </v-row>
  </div>
</template>
