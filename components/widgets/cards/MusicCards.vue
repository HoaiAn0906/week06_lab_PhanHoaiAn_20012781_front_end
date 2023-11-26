<script setup lang="ts">
import { musicCard } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-row class="pt-3">
    <v-col v-for="card in musicCard" :key="card.title" cols="12" md="4">
      <v-card elevation="10" rounded="md">
        <v-row class="mt-md-0 mt-sm-3 mt-3">
          <v-col cols="6" sm="6">
            <v-card-item>
              <h5 class="text-h5" v-text="card.title" />
              <div class="text-subtitle-1 text-medium-emphasis mt-1" v-text="card.subheader" />
            </v-card-item>
            <div class="d-flex align-center justify-center mt-9 pa-4 pt-0">
              <v-btn class="grey100" icon size="30" variant="flat">
                <v-avatar size="22">
                  <PlayerSkipBackIcon color="grey100" size="20" />
                </v-avatar>
              </v-btn>
              <v-btn class="mx-6 text-error" icon size="30" variant="flat">
                <v-avatar size="22">
                  <PlayerPlayIcon class="text-error" size="20" />
                </v-avatar>
              </v-btn>
              <v-btn class="grey100" icon size="30" variant="flat">
                <v-avatar size="22">
                  <PlayerSkipForwardIcon size="20" />
                </v-avatar>
              </v-btn>
            </div>
          </v-col>
          <v-col class="py-0 pl-0" cols="6" sm="6">
            <v-img class="rounded-e-md" cover height="100%" :src="card.img" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
