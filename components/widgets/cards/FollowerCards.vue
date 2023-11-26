<script setup lang="ts">
import { followerCard } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-row class="pt-3">
    <v-col v-for="card in followerCard" :key="card.title" cols="12" md="4">
      <v-card elevation="10" rounded="md">
        <v-card-item>
          <div class="d-flex align-center">
            <v-avatar rounded="xl" size="40">
              <img :alt="card.avatar" :src="card.avatar" width="40" />
            </v-avatar>
            <div class="pl-4 mt-n1">
              <h5 class="text-h6" v-text="card.title" />
              <h6 class="text-subtitle-1 text-medium-emphasis d-flex align-center">
                <MapPinIcon class="mr-1" size="18" />
                {{ card.location }}
              </h6>
            </div>
            <v-btn class="ml-auto" color="primary" flat>Follow</v-btn>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
