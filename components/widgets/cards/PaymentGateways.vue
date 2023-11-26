<script setup lang="ts">
import { paymentGateways } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-card elevation="10">
    <v-card-item>
      <v-card-title class="text-h5">Payment Gateways</v-card-title>
      <v-card-subtitle class="text-subtitle-1 textSecondary">Platform For Income</v-card-subtitle>
      <div class="mt-sm-10 mt-5">
        <div v-for="list in paymentGateways" :key="list.title" class="d-flex align-center mt-6">
          <v-avatar :class="'rounded-md bg-light' + list.bgcolor" size="40">
            <img :alt="list.img" :src="list.img" width="25" />
          </v-avatar>
          <div class="pl-4 mt-n1">
            <h5 class="text-h6">{{ list.title }}</h5>
            <h6 class="text-subtitle-1 textSecondary mt-1">{{ list.subtitle }}</h6>
          </div>
          <div :class="'ml-auto font-weight-bold text-subtitle-1 text-medium-' + list.disable">{{ list.rank }}</div>
        </div>
        <v-btn block class="mt-sm-15 mt-10" color="primary" variant="outlined">View all transactions</v-btn>
      </div>
    </v-card-item>
  </v-card>
</template>
