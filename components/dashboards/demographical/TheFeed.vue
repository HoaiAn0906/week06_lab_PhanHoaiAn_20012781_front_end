<script setup lang="ts">
import { ref } from 'vue'
import { feedsData } from '@/_mockApis/components/dashboards/DemographicalData'
function href() {
  return undefined
}
</script>
<template>
  <VCard class="overflow-hidden" elevation="10">
    <span class="lstick" />
    <v-card-text class="pb-1">
      <h2 class="text-h5 mb-1">Feeds</h2>
      <h5 class="text-subtitle-1">Checkout the new feeds</h5>
    </v-card-text>
    <v-list class="overflow-hidden">
      <perfect-scrollbar style="height: 290px">
        <v-list-item v-for="(item, i) in feedsData" :key="i" @click="href">
          <v-list-item-title class="px-4">
            <div class="d-flex align-center py-3">
              <div class="mr-3">
                <v-badge bordered bottom :color="item.avatarstatus" dot offset-x="0" offset-y="0">
                  <v-avatar size="40">
                    <img :alt="item.title" :src="item.avatar" width="40" />
                  </v-avatar>
                </v-badge>
              </div>
              <div class="mx-3">
                <h4 class="text-h6 mt-n1 mb-1">{{ item.title }}</h4>
                <h6 class="runcate-text text-subtitle-2 textSecondary">{{ item.desc }}</h6>
              </div>
            </div>
          </v-list-item-title>
        </v-list-item>
      </perfect-scrollbar>
    </v-list>
  </VCard>
</template>

<style scoped>
.lstick {
  left: 2px;
}
</style>
