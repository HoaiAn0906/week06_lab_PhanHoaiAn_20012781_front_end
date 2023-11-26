<script setup lang="ts">
import { ref } from 'vue'
const show2 = ref(true)

/* Location Select */
const select = ref('')
const location = ref(['India', 'United Kingdom', 'Srilanka'])
</script>
<template>
  <v-card elevation="10">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between">
        <v-card-title class="text-h5">Form Separator</v-card-title>
      </div>
    </v-card-item>
    <v-divider />
    <!----Account Details---->
    <v-card-text class="pb-0">
      <h6 class="text-h6">Account Details</h6>
      <div class="mt-6">
        <v-row class="align-center mb-3">
          <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
            <v-label class="font-weight-medium">Username</v-label>
          </v-col>
          <v-col cols="12" sm="9">
            <v-text-field color="primary" hide-details placeholder="John Deo" type="text" variant="outlined" />
          </v-col>
        </v-row>
        <v-row class="align-center mb-3">
          <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
            <v-label class="font-weight-medium">Email</v-label>
          </v-col>
          <v-col cols="12" sm="9">
            <v-text-field
              color="primary"
              hide-details
              placeholder="john.deo"
              suffix="@example.com"
              type="email"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <v-row class="align-center mb-3">
          <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
            <v-label class="font-weight-medium">Password</v-label>
          </v-col>
          <v-col cols="12" sm="9">
            <v-text-field
              :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              color="primary"
              hide-details
              placeholder="john.deo"
              :type="show2 ? 'text' : 'password'"
              variant="outlined"
              @click:append-inner="show2 = !show2"
            />
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-divider />
    <!----Personal Info---->
    <v-card-text class="pb-1">
      <h6 class="text-h6">Personal Info</h6>
      <div class="mt-6">
        <v-row class="align-center mb-3">
          <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
            <v-label class="font-weight-medium">Full Name</v-label>
          </v-col>
          <v-col cols="12" sm="9">
            <v-text-field color="primary" hide-details placeholder="John Deo" type="text" variant="outlined" />
          </v-col>
        </v-row>
        <v-row class="align-center mb-3">
          <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
            <v-label class="font-weight-medium">Country</v-label>
          </v-col>
          <v-col cols="12" sm="9">
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
          </v-col>
        </v-row>
        <v-row class="align-center mb-3">
          <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
            <v-label class="font-weight-medium">Birth Date</v-label>
          </v-col>
          <v-col cols="12" sm="9">
            <v-text-field color="primary" hide-details type="date" variant="outlined" />
          </v-col>
        </v-row>
        <v-row class="align-center mb-3">
          <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
            <v-label class="font-weight-medium">Phone No</v-label>
          </v-col>
          <v-col cols="12" sm="9">
            <v-text-field color="primary" hide-details placeholder="123 4567 207" type="text" variant="outlined" />
          </v-col>
        </v-row>
        <v-row class="align-center mb-3">
          <v-col cols="12" offset-sm="3" sm="9">
            <v-btn color="primary" flat>Submit</v-btn>
            <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>
