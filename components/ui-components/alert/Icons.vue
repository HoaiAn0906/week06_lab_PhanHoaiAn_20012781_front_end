<template>
  <v-alert class="mb-4" color="success" variant="tonal">
    <template #prepend>
      <v-icon class="text-24">mdi-checkbox-marked-circle-outline</v-icon>
    </template>
    <div>This is an success alert.</div>
  </v-alert>
  <v-alert class="mb-4" color="info" variant="tonal">
    <template #prepend>
      <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
    </template>
    <div>This is an info alert.</div>
  </v-alert>
  <v-alert class="mb-4" color="warning" variant="tonal">
    <template #prepend>
      <v-icon class="text-24">mdi-alert-outline</v-icon>
    </template>
    <div>This is an warning alert.</div>
  </v-alert>
  <v-alert class="mb-4" color="error" variant="tonal">
    <template #prepend>
      <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
    </template>
    <div>This is an error alert.</div>
  </v-alert>
</template>
