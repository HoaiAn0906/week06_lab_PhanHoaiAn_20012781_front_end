<script setup lang="ts">
import { userCards } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-row>
    <v-col v-for="card in userCards" :key="card.title" cols="12" md="3" sm="6">
      <v-card elevation="10" rounded="md">
        <v-card-item>
          <v-avatar rounded="xl" size="80">
            <img :alt="card.avatar" :src="card.avatar" width="80" />
          </v-avatar>
          <div class="mt-6">
            <h5 class="text-h6 mb-2" v-text="card.title" />
            <div class="d-flex align-center justify-space-between">
              <div class="ml-2 d-flex flex-row-reverse">
                <v-avatar v-for="user in card.userGroup" :key="user.icon" class="ml-n2 avtar-border" size="28">
                  <img alt="avatar" height="28" :src="user.icon" />
                </v-avatar>
              </div>
              <h6 class="text-subtitle-1 text-medium-emphasis">{{ card.subtitle }}</h6>
            </div>
          </div>
          <div class="mt-6">
            <v-btn block class="bg-lightprimary text-primary" flat>Add friend</v-btn>
            <v-btn block class="mt-3 bg-lightsecondary textSecondary" flat>Remove</v-btn>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
