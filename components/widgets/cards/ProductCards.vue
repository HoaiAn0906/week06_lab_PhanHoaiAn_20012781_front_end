<script setup lang="ts">
import { productsCard } from '@/_mockApis/components/widget/card'
</script>
<template>
  <v-row>
    <v-col v-for="card in productsCard" :key="card.title" cols="12" lg="3" sm="6">
      <v-card elevation="10" rounded="md">
        <RouterLink :to="card.link">
          <v-img class="rounded-t-md" height="100%" :src="card.photo" />
        </RouterLink>
        <div class="d-flex justify-end mr-3 mt-n3">
          <v-btn class="bg-primary d-flex" icon size="30" variant="flat">
            <v-avatar class="text-white" size="30">
              <BasketIcon size="17" />
            </v-avatar>
            <v-tooltip activator="parent" location="bottom">Add To Cart</v-tooltip>
          </v-btn>
        </div>
        <v-card-item class="pt-0">
          <h6 class="text-h6" v-text="card.title" />
          <div class="d-flex align-center justify-space-between mt-1">
            <div>
              <span class="text-h6" v-text="'$' + card.price" />
              <span
                class="text-body-1 ml-2 text-medium-emphasis text-decoration-line-through"
                v-text="'$' + card.salesPrice"
              />
            </div>
            <v-rating v-model="card.rating" color="warning" density="compact" readonly size="small" />
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
