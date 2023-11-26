<script setup lang="ts">
import { ref } from 'vue'
/* Password hide/show */
const show2 = ref(true)
const show3 = ref(true)
</script>
<template>
  <v-row>
    <v-col cols="12" md="6">
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">User Name</v-label>
        <v-text-field color="primary" hide-details placeholder="John" type="text" variant="outlined" />
      </div>
      <div>
        <v-label class="font-weight-medium mb-2">Password</v-label>
        <v-text-field
          :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          class="text-subtitle-1"
          color="primary"
          hide-details
          placeholder="john.deo"
          :type="show2 ? 'text' : 'password'"
          variant="outlined"
          @click:append-inner="show2 = !show2"
        />
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Email</v-label>
        <v-text-field
          color="primary"
          hide-details
          placeholder="john.deo"
          suffix="@example.com"
          type="email"
          variant="outlined"
        />
      </div>
      <div>
        <v-label class="font-weight-medium mb-2">Confirm</v-label>
        <v-text-field
          :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          class="text-subtitle-1"
          color="primary"
          hide-details
          placeholder="john.deo"
          :type="show3 ? 'text' : 'password'"
          variant="outlined"
          @click:append-inner="show3 = !show3"
        />
      </div>
    </v-col>
    <v-col cols="12">
      <v-btn color="primary" flat>Submit</v-btn>
      <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
    </v-col>
  </v-row>
</template>
