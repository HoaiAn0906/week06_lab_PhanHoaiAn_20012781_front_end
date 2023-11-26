<script setup lang="ts">
import { ref } from 'vue'
</script>
<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="10">
      <v-expansion-panel-title class="text-h6" collapse-icon="mdi-minus" expand-icon="mdi-plus">
        Accordion 1
      </v-expansion-panel-title>
      <v-expansion-panel-text class="text-caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </v-expansion-panel-text>
      <v-divider />
    </v-expansion-panel>

    <v-expansion-panel elevation="10">
      <v-expansion-panel-title class="text-h6">
        Accordion 2
        <template #actions="{ expanded }">
          <v-icon :color="!expanded ? 'teal' : ''" :icon="expanded ? 'mdi-pencil' : 'mdi-check'" />
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="text-caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </v-expansion-panel-text>
      <v-divider />
    </v-expansion-panel>

    <v-expansion-panel elevation="10">
      <v-expansion-panel-title class="text-h6" disable-icon-rotate>
        Accordion 3
        <template #actions>
          <v-icon color="primary" icon="mdi-alert-circle" />
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="text-caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </v-expansion-panel-text>
      <v-divider />
    </v-expansion-panel>
  </v-expansion-panels>
</template>
