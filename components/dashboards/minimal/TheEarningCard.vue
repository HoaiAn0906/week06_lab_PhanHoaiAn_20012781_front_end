<script setup lang="ts">
import { ref } from 'vue'
import { earningCardsData } from '@/_mockApis/components/dashboards/MinimalData'
</script>
<template>
  <v-row>
    <v-col
      v-for="revenuecard in earningCardsData"
      :key="revenuecard.title"
      class="py-0 mb-3"
      cols="12"
      lg="3"
      :revenuecard="revenuecard"
      sm="6"
    >
      <VCard elevation="10">
        <span class="lstick" />
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <img alt="icon" :src="revenuecard.img" />
            <div class="ml-4 mr-1">
              <h4 class="text-subtitle-1">
                {{ revenuecard.title }}
              </h4>
              <h2 class="text-h5">
                {{ revenuecard.number }}
              </h2>
            </div>
          </div>
        </v-card-text>
      </VCard>
    </v-col>
  </v-row>
</template>

<style scoped>
.lstick {
  top: 45px;
}
</style>
