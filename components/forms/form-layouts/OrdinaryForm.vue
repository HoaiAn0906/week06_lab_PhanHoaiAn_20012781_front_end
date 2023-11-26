<script setup lang="ts">
import { ref } from 'vue'
const checkbox1 = ref(true)
</script>
<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-label class="mb-2 font-weight-medium">Email</v-label>
      <v-text-field
        color="primary"
        hint="We'll never share your email with anyone else."
        persistent-hint
        placeholder="Enter email"
        variant="outlined"
      />
      <v-label class="mb-2 font-weight-medium mt-5">Password</v-label>
      <v-text-field
        color="primary"
        hide-details
        persistent-hint
        placeholder="Enter password"
        type="password"
        variant="outlined"
      />
      <div class="my-3">
        <v-checkbox v-model="checkbox1" color="primary" density="compact" hide-details label="Check Me Out!" />
      </div>
      <v-btn color="primary" flat>Submit</v-btn>
    </v-col>
  </v-row>
</template>
