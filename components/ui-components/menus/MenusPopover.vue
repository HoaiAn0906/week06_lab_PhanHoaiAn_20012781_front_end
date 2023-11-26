<script setup lang="ts">
import { ref } from 'vue'
const fav = ref(true)
const menu = ref(false)
const message = ref(false)
const hints = ref(true)
</script>

<template>
  <div class="text-center mt-4">
    <v-menu v-model="menu" anchor="top" :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn color="secondary" v-bind="props" flat>Menu as Popover</v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            subtitle="Founder of Vuetify"
            title="John Leider"
          >
            <template #append>
              <v-btn :class="fav ? 'text-primary' : ''" flat icon="mdi-heart" variant="text" @click="fav = !fav" />
            </template>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
          <v-list-item>
            <v-switch v-model="message" class="pl-2" color="primary" hide-details label="Enable messages" />
          </v-list-item>

          <v-list-item>
            <v-switch v-model="hints" class="pl-2" color="primary" hide-details label="Enable hints" />
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer />

          <v-btn flat text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" flat text @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
