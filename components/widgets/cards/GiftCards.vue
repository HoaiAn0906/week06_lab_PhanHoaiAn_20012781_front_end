<script setup lang="ts">
import { ref } from 'vue'
import { GiftIcon } from 'vue-tabler-icons'
import img1 from '~/images/products/s1.jpg'
import img2 from '~/images/products/s2.jpg'
/* import tabler icons */
const gift = [
  {
    title: 'Andrew Grant',
    avatar: img1,
  },
  {
    title: 'Leo Pratt',
    avatar: img2,
  },
]
</script>
<template>
  <v-row>
    <v-col v-for="card in gift" :key="card.title" cols="12" md="6">
      <v-card elevation="10" rounded="md">
        <v-card-item>
          <div class="d-flex align-center justify-space-between">
            <h5 class="text-h6" v-text="card.title" />
            <v-btn class="mx-1 textSecondary" icon size="30" variant="flat">
              <v-avatar size="25">
                <gift-icon class="textSecondary" size="20" />
              </v-avatar>
            </v-btn>
          </div>
          <v-avatar cla class="w-100 mt-2 mb-6" rounded="lg" size="160">
            <img :alt="card.avatar" class="w-100" :src="card.avatar" />
          </v-avatar>
          <v-btn block color="primary" flat>Gift to Friend ($50.00)</v-btn>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
