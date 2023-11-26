<script setup lang="ts">
import { ref } from 'vue'
const show2 = ref(true)
const show3 = ref(true)

/* Location Select */
const select = ref('')
const location = ref(['India', 'United Kingdom', 'Srilanka'])
const selectlng = ref('')
const lang = ref(['English', 'French'])
</script>
<template>
  <v-card class="withbg" elevation="10">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between">
        <v-card-title class="text-h5">Multi Column with Form Separator</v-card-title>
      </div>
    </v-card-item>
    <v-divider />
    <!----Account Details---->
    <v-card-text class="pb-0">
      <h6 class="text-h6">Account Details</h6>
      <v-row class="mt-5 mb-3">
        <v-col cols="12" md="6">
          <div class="mb-6">
            <v-label class="font-weight-medium mb-2">Username</v-label>
            <v-text-field color="primary" hide-details placeholder="John Deo" type="text" variant="outlined" />
          </div>
          <div class="">
            <v-label class="font-weight-medium mb-2">Password</v-label>
            <v-text-field
              :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
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
          <v-label class="font-weight-medium mb-2">Confirm Password</v-label>
          <v-text-field
            :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            color="primary"
            hide-details
            placeholder="john.deo"
            :type="show3 ? 'text' : 'password'"
            variant="outlined"
            @click:append-inner="show3 = !show3"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <!----Personal Info---->
    <v-card-text class="pb-1">
      <h6 class="text-h6">Personal Info</h6>
      <v-row class="mt-5 mb-3">
        <v-col cols="12" md="6">
          <div class="mb-6">
            <v-label class="font-weight-medium mb-2">First Name</v-label>
            <v-text-field color="primary" hide-details placeholder="John Deo" type="text" variant="outlined" />
          </div>
          <div class="mb-6">
            <v-label class="font-weight-medium mb-2">Country</v-label>
            <v-select
              v-model="select"
              hide-details
              item-title="state"
              item-value="abbr"
              :items="location"
              label="Select"
              return-object
              single-line
              variant="outlined"
            />
          </div>
          <div>
            <v-label class="font-weight-medium mb-2">Birth Date</v-label>
            <v-text-field color="primary" hide-details type="date" variant="outlined" />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-6">
            <v-label class="font-weight-medium mb-2">Last Name</v-label>
            <v-text-field color="primary" hide-details placeholder="Deo" type="text" variant="outlined" />
          </div>
          <div class="mb-6">
            <v-label class="font-weight-medium mb-2">Language</v-label>
            <v-select v-model="selectlng" hide-details :items="lang" single-line variant="outlined" />
          </div>
          <div>
            <v-label class="font-weight-medium mb-2">Phone No</v-label>
            <v-text-field color="primary" hide-details placeholder="412 2150 451" type="text" variant="outlined" />
          </div>
        </v-col>
        <v-col cols="12">
          <v-btn color="primary" flat>Submit</v-btn>
          <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
