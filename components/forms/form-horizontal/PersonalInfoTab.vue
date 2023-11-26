<script setup lang="ts">
import { ref } from 'vue'
// import type { VTextField } from 'vuetify/lib/components';
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
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">First Name</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <VTextField color="primary" hide-details placeholder="John" type="text" />
        </v-col>
      </v-row>
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Country</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <VSelect v-model="select" hide-details :items="location" single-line />
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Birth Date</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <VTextField color="primary" hide-details type="date" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Last Name</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field color="primary" hide-details placeholder="Doe" type="text" variant="outlined" />
        </v-col>
      </v-row>
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Language</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <VSelect v-model="selectlng" hide-details :items="language" single-line />
        </v-col>
      </v-row>
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Phone no</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field color="primary" hide-details placeholder="123 4567 201" type="text" variant="outlined" />
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
