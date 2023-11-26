<script setup lang="ts">
import { ref } from 'vue'
// icons
import { LockIcon, UserIcon, MailIcon } from 'vue-tabler-icons'
const checkbox1 = ref(false)
</script>
<template>
  <v-label class="mb-2 font-weight-medium">Username</v-label>
  <v-text-field color="primary" placeholder="Username" type="text" variant="outlined">
    <template #append-inner>
      <user-icon class="text-medium-emphasis" size="22" stroke-width="1.5" />
    </template>
  </v-text-field>
  <v-label class="mb-2 font-weight-medium">Email</v-label>
  <v-text-field color="primary" placeholder="Email" type="email" variant="outlined">
    <template #append-inner>
      <mail-icon class="text-medium-emphasis" size="22" stroke-width="1.5" />
    </template>
  </v-text-field>
  <v-label class="mb-2 font-weight-medium">Password</v-label>
  <v-text-field color="primary" placeholder="Password" type="password" variant="outlined">
    <template #append-inner>
      <lock-icon class="text-medium-emphasis" size="22" stroke-width="1.5" />
    </template>
  </v-text-field>
  <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
  <v-text-field color="primary" hide-details placeholder="Confirm Password" type="password" variant="outlined">
    <template #append-inner>
      <lock-icon class="text-medium-emphasis" size="22" stroke-width="1.5" />
    </template>
  </v-text-field>
  <div class="my-3">
    <v-checkbox v-model="checkbox1" color="primary" density="compact" hide-details label="Check Me Out!" />
  </div>
  <v-btn class="mr-3" color="primary">Submit</v-btn>
  <v-btn class="mr-3" color="error">Cancel</v-btn>
</template>
