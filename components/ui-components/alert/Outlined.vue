<template>
  <v-alert class="mb-4" density="compact" type="error" variant="outlined">
    <template #prepend>
      <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
    </template>
    <div>This is an error alert — check it out!</div>
  </v-alert>
  <v-alert class="mb-4" density="compact" type="warning" variant="outlined">
    <template #prepend>
      <v-icon class="text-24">mdi-alert-outline</v-icon>
    </template>
    <div>This is a warning alert — check it out!</div>
  </v-alert>
  <v-alert class="mb-4" density="compact" type="info" variant="outlined">
    <template #prepend>
      <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
    </template>
    <div>This is an info alert — check it out!</div>
  </v-alert>
  <v-alert class="mb-4" density="compact" type="success" variant="outlined">
    <template #prepend>
      <v-icon class="text-24">mdi-checkbox-marked-circle-outline</v-icon>
    </template>
    <div>This is a success alert — check it out!</div>
  </v-alert>
</template>
