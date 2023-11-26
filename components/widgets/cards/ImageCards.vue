<script setup lang="ts">
import { ref } from 'vue'
import { imgCardData } from '@/_mockApis/components/widget/card'
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Image Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col v-for="(item, i) in imgCardData" :key="i" cols="12" lg="4">
      <v-card class="overflow-hidden" elevation="10">
        <v-img class="w-100" cover height="250" :src="item.image" />
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">Special title treatment</h5>
          <p class="text-subtitle-1 textSecondary mt-3">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <v-btn class="mt-4" :color="item.color">Go Somewhere</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
