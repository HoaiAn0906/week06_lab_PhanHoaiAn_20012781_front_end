<script setup lang="ts">
import { profileCards, socialiconCard } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-row class="pt-3">
    <v-col v-for="card in profileCards" :key="card.title" cols="12" md="4">
      <v-card class="text-center" elevation="10" rounded="md">
        <v-card-item>
          <v-avatar rounded="xl" size="80">
            <img :alt="card.avatar" :src="card.avatar" width="80" />
          </v-avatar>
          <div class="mt-4">
            <h5 class="text-h5" v-text="card.title" />
            <h6 class="text-subtitle-2 mt-2" v-text="card.subtitle" />
          </div>
        </v-card-item>
        <v-divider class="mt-1" />
        <div class="text-center d-flex justify-center pa-3">
          <v-btn v-for="icon in socialiconCard" :key="icon.name" icon size="30" variant="flat">
            <v-avatar size="22">
              <component :is="icon.icon" :class="'text-' + icon.color" size="18" stroke-width="2" />
            </v-avatar>
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
