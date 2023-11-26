<script setup lang="ts"></script>
<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-label class="mb-2 font-weight-medium">Success Input</v-label>
      <v-text-field color="success" placeholder="Success value" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Error Input</v-label>
      <v-text-field color="error" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Input with Error text</v-label>
      <v-text-field color="error" hint="Incorrect entry." persistent-hint variant="outlined" />
    </v-col>
  </v-row>
</template>
