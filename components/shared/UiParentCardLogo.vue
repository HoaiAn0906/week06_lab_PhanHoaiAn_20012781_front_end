<script setup lang="ts"></script>

// ===============================|| Ui Parent Card||=============================== //
<template>
  <v-card class="overflow-hidden" elevation="10">
    <v-card-item class="v-card-item bg-primary py-3">
      <div class="d-sm-flex align-center justify-space-between">
        <v-card-title class="text-h5"><LcFullLogoLight /></v-card-title>
        <!-- <template v-slot:append> -->
        <slot name="action" />
        <!-- </template> -->
      </div>
    </v-card-item>
    <v-divider />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
