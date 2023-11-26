<script setup lang="ts">
import { ref } from 'vue'
const select = ref('select')
const gender = ref(['Male', 'Female'])
const inline = ref(null)
const country = ref(['USA', 'United Kingdom', 'India', 'Srilanka'])
</script>
<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-alert class="mb-6" color="primary" type="warning" variant="tonal">Person Info</v-alert>

      <v-row>
        <v-col cols="12" md="6">
          <v-label class="mb-2 font-weight-medium">First Name</v-label>
          <v-text-field color="primary" variant="outlined" />
          <v-label class="mb-2 font-weight-medium">Select Gender</v-label>
          <v-select
            item-title="gender"
            item-value="abbr"
            :items="gender"
            return-object
            single-line
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2 font-weight-medium">Last Name</v-label>
          <v-text-field color="primary" variant="outlined" />
          <v-label class="mb-2 font-weight-medium">Date of Birth</v-label>
          <v-text-field color="primary" type="date" variant="outlined" />
        </v-col>
      </v-row>
      <v-label class="mb-2 font-weight-medium">Membership</v-label>
      <v-radio-group v-model="inline" inline>
        <v-radio color="primary" label="Free" value="radio-1" />
        <v-radio color="primary" label="Paid" value="radio-2" />
      </v-radio-group>
      <!---Address--->
      <v-alert class="mb-6" color="primary" type="warning" variant="tonal">Address</v-alert>
      <v-row>
        <v-col cols="12">
          <v-label class="mb-2 font-weight-medium">Street</v-label>
          <v-text-field color="primary" hide-details variant="outlined" />
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2 font-weight-medium">City</v-label>
          <v-text-field color="primary" variant="outlined" />
          <v-label class="mb-2 font-weight-medium">Post Code</v-label>
          <v-text-field color="primary" variant="outlined" />
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2 font-weight-medium">State</v-label>
          <v-text-field color="primary" variant="outlined" />
          <v-label class="mb-2 font-weight-medium">Country</v-label>
          <v-select
            item-title="country"
            item-value="abbr"
            :items="country"
            return-object
            single-line
            variant="outlined"
          />
        </v-col>
      </v-row>

      <v-btn class="mr-3" color="error" flat>Cancel</v-btn>
      <v-btn color="primary" flat>Submit</v-btn>
    </v-col>
  </v-row>
</template>
