<script setup lang="ts">
// assets
import imageEmpty from '~/images/products/empty-shopping-cart.svg'
</script>

<template>
  <v-row class="justify-conent-center">
    <v-col class="text-center" lg="10">
      <v-img alt="cover" class="mx-auto mt-10 mb-0" height="350" :src="imageEmpty" />
      <h1 class="text-h1 mb-3">There is no Product</h1>
      <p>Try checking your spelling or use more general terms</p>
    </v-col>
  </v-row>
</template>
