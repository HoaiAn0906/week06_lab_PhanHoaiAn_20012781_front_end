<script setup lang="ts">
import { ref } from 'vue'
import { HeartIcon, PhoneIcon, UserIcon } from 'vue-tabler-icons'
const tab4 = ref(null)
</script>
<template>
  <v-tabs v-model="tab4" color="primary">
    <v-tab value="1111">
      <phone-icon class="v-icon--start" stroke-width="1.5" width="20" />
      Item One
    </v-tab>
    <v-tab disabled value="2222">
      <heart-icon class="v-icon--start" stroke-width="1.5" width="20" />
      Item Two
    </v-tab>
    <v-tab value="4444">
      <user-icon class="v-icon--start" stroke-width="1.5" width="20" />
      Item Three
    </v-tab>
  </v-tabs>
  <v-divider />
  <v-card-text class="bg-grey100 mt-4 rounded-md">
    <v-window v-model="tab4">
      <v-window-item value="1111">item one</v-window-item>
      <v-window-item value="2222">item two</v-window-item>
      <v-window-item value="4444">item three</v-window-item>
    </v-window>
  </v-card-text>
</template>
