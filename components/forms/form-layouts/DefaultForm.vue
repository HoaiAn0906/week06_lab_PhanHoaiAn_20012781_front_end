<script setup lang="ts">
import { ref } from 'vue'
const select = ref('select')
const items = ref(['One', 'Two', 'Three', 'Four'])
const defaultcheckbox1 = ref(false)
const defaultcheckbox2 = ref(false)
const defaultcheckbox3 = ref(false)
const defaultcheckbox4 = ref(false)
const defaultcheckbox5 = ref(false)
const defaultcheckbox6 = ref(false)
</script>
<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-label class="mb-2 font-weight-medium">Default Text</v-label>
      <v-text-field color="primary" model-value="George deo" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Email</v-label>
      <v-text-field color="primary" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Password</v-label>
      <v-text-field color="primary" type="password" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Read Only</v-label>
      <v-text-field color="primary" hide-details model-value="Hello World" readonly variant="outlined" />
      <v-row class="my-3">
        <v-col cols="12" sm="8">
          <v-row>
            <v-col cols="12" lg="6" md="12">
              <v-checkbox
                v-model="defaultcheckbox1"
                color="primary"
                density="compact"
                hide-details
                label="Check this custom checkbox"
              />
              <v-checkbox
                v-model="defaultcheckbox2"
                color="primary"
                density="compact"
                hide-details
                label="Check this custom checkbox"
              />
              <v-checkbox
                v-model="defaultcheckbox3"
                color="primary"
                density="compact"
                hide-details
                label="Check this custom checkbox"
              />
            </v-col>
            <v-col cols="12" lg="6" md="12">
              <v-checkbox
                v-model="defaultcheckbox4"
                color="primary"
                density="compact"
                hide-details
                label="Check this custom checkbox"
              />
              <v-checkbox
                v-model="defaultcheckbox5"
                color="primary"
                density="compact"
                hide-details
                label="Check this custom checkbox"
              />
              <v-checkbox
                v-model="defaultcheckbox6"
                color="primary"
                density="compact"
                hide-details
                label="Check this custom checkbox"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-label class="mb-2 font-weight-medium">Select</v-label>
      <v-select
        v-model="select"
        item-title="state"
        item-value="abbr"
        :items="items"
        label="Select"
        return-object
        single-line
        variant="outlined"
      />
      <v-btn color="primary" flat>Submit</v-btn>
    </v-col>
  </v-row>
</template>
