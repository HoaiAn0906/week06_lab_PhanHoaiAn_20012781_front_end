<script setup lang="ts">
import { upcommingCards } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-card elevation="10">
    <v-card-item class="pb-sm-8 pb-6">
      <v-card-title class="text-h5">Upcoming Activity</v-card-title>
      <v-card-subtitle class="text-subtitle-1 mt-n1">In New year</v-card-subtitle>
      <div class="mt-sm-10 mt-5">
        <div v-for="list in upcommingCards" :key="list.title" class="d-flex align-center mt-6">
          <v-avatar :class="'rounded-md bg-light' + list.bgcolor" size="40">
            <component :is="list.icon" :class="'text-' + list.bgcolor" size="20" stroke-width="2" />
          </v-avatar>
          <div class="pl-4 mt-n1">
            <h5 class="text-h6" v-text="list.title" />
            <h6 class="text-subtitle-1 text-medium-emphasis" v-text="list.subtitle" />
          </div>
          <div class="ml-auto font-weight-medium text-subtitle-1 text-medium-emphasis" v-text="list.rank" />
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>
