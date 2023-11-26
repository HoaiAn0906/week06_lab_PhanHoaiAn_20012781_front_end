<script setup lang="ts">
import { ref } from 'vue'
/* Password hide/show */
const show2 = ref(true)
const show3 = ref(true)
</script>
<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">User Name</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field color="primary" hide-details placeholder="John" type="text" variant="outlined" />
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Password</v-label>
        </v-col>
        <v-col cols="12" sm="9">
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
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
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
          <v-label class="font-weight-medium">Confirm</v-label>
        </v-col>
        <v-col cols="12" sm="9">
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
        </v-col>
      </v-row>
    </v-col>
    <v-col class="mt-n6" cols="12" md="6">
      <v-row class="align-center">
        <v-col cols="12" offset-sm="3" sm="9">
          <v-btn color="primary" flat>Submit</v-btn>
          <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
