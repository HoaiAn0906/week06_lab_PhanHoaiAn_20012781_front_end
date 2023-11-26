<script setup lang="ts">
import { ref } from 'vue'
/* Location Select */
const select = ref('')
const location = ref(['India', 'United Kingdom', 'Srilanka'])

/* Language Select */
const selectlng = ref('')
const language = ref(['English', 'French'])
</script>
<template>
  <v-row>
    <v-col cols="12" md="6">
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">First Name</v-label>
        <v-text-field color="primary" hide-details placeholder="John" type="text" variant="outlined" />
      </div>
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Country</v-label>
        <v-select v-model="select" hide-details :items="location" single-line variant="outlined" />
      </div>
      <div>
        <v-label class="font-weight-medium mb-2">Birth Date</v-label>
        <v-text-field color="primary" hide-details type="date" variant="outlined" />
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Last Name</v-label>
        <v-text-field color="primary" hide-details placeholder="Doe" type="text" variant="outlined" />
      </div>
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Language</v-label>
        <v-select v-model="selectlng" hide-details :items="language" single-line variant="outlined" />
      </div>
      <div>
        <v-label class="font-weight-medium mb-2">Phone no</v-label>
        <v-text-field color="primary" hide-details placeholder="123 4567 201" type="text" variant="outlined" />
      </div>
    </v-col>
    <v-col cols="12">
      <v-btn color="primary" flat>Submit</v-btn>
      <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
    </v-col>
  </v-row>
</template>
