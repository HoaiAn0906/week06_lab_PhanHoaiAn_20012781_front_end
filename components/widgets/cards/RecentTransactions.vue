<script setup lang="ts">
import { ref } from 'vue'
import { CircleIcon } from 'vue-tabler-icons'
import { recentTransaction } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-card elevation="10">
    <v-card-item>
      <v-card-title class="text-h5">Recent Transactions</v-card-title>
      <div class="recent-transaction mt-10 px-3">
        <div v-for="list in recentTransaction" :key="list.title">
          <v-row class="d-flex mb-4">
            <v-col class="px-0 pt-0 pb-1 d-flex align-start" cols="4" lg="3" md="auto" sm="auto">
              <h6 class="text-body-1 textSecondary text-no-wrap">{{ list.title }}</h6>
            </v-col>
            <v-col class="px-0 text-center pt-0 pb-1" cols="1" sm="1">
              <circle-icon :class="'text-' + list.textcolor" size="13" />
              <div v-if="list.line" class="line mx-auto bg-grey100" />
            </v-col>
            <v-col class="pt-0 pb-1" cols="7" sm="8">
              <h6 v-if="list.boldtext" class="text-body-1 font-weight-bold">{{ list.subtitle }}</h6>
              <h6 v-else class="text-body-1 textSecondary">{{ list.subtitle }}</h6>
              <div class="mt-n1">
                <RouterLink v-if="list.link" class="text-body-1 text-primary text-decoration-none" :to="list.url">
                  {{ list.link }}
                </RouterLink>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>
