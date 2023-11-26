<script setup lang="ts">
import { ref } from 'vue'
import { Volume2Icon, VolumeIcon } from 'vue-tabler-icons'
const select = ref('One')
const items = ref(['One', 'Two', 'Three', 'Four'])
const radios = ref('Male')
const checked = ref(true)
const range = ref([20, 40])
const sel1 = ref('750')
const sel2 = ref('950')
const select1 = ref(['750', '850', '950'])
const select2 = ref(['950', '1050', '1150'])
const volume = ref(40)
const model = ref(true)
</script>
<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-label class="mb-2 font-weight-medium">Name</v-label>
      <v-text-field color="primary" placeholder="Enter Text" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Select Dropdown</v-label>
      <v-select
        v-model="select"
        item-title="items"
        item-value="abbr"
        :items="items"
        return-object
        single-line
        variant="outlined"
      />
    </v-col>
    <v-col cols="12" sm="4">
      <v-label class="mb-2 font-weight-medium">Company Name</v-label>
      <v-text-field color="primary" placeholder="Enter Text" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Time</v-label>
      <v-text-field color="primary" placeholder="hh:mm" type="time" variant="outlined" />
    </v-col>
    <v-col cols="12" sm="4">
      <v-label class="mb-2 font-weight-medium">Industry Type</v-label>
      <v-text-field color="primary" placeholder="Disabled Filled" variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Date</v-label>
      <v-text-field color="primary" type="date" variant="outlined" />
    </v-col>

    <v-col cols="12">
      <v-label class="mb-2 font-weight-medium">Lorem ipsum dolor sit amet</v-label>
      <v-radio-group v-model="radios" inline>
        <v-row>
          <v-col cols="12" md="4"><v-radio color="primary" label="Male" value="Male" /></v-col>
          <v-col cols="12" md="4"><v-radio color="primary" label="Female" value="Female" /></v-col>
          <v-col cols="12" md="4"><v-radio color="primary" disabled label="Disabled" value="Disabled" /></v-col>
        </v-row>
      </v-radio-group>
      <v-label class="mb-2 font-weight-medium">Industry Type</v-label>
      <v-row>
        <v-col cols="12" md="4">
          <v-checkbox v-model="checked" color="primary" label="Enter text" />
        </v-col>
        <v-col cols="12" md="4">
          <v-checkbox color="primary" label="Enter text" />
        </v-col>
        <v-col cols="12" md="4">
          <v-checkbox disabled label="Disabled" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-label class="mb-2 font-weight-medium">Slider</v-label>
          <v-range-slider v-model="range" color="primary" strict />
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="sel1"
                item-title="select1"
                item-value="abbr"
                :items="select1"
                return-object
                single-line
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="sel2"
                item-title="select2"
                item-value="abbr"
                :items="select2"
                return-object
                single-line
                variant="outlined"
              />
            </v-col>
          </v-row>
          <v-label class="mb-2 font-weight-medium">Volume</v-label>
          <v-slider v-model="volume" color="primary">
            <template #prepend>
              <v-btn color="primary" size="small" variant="text">
                <volume2-icon size="20" stroke-width="1.5" />
              </v-btn>
            </template>
            <template #append>
              <v-btn color="primary" size="small" variant="text">
                <volume-icon size="20" stroke-width="1.5" />
              </v-btn>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-label class="mb-2 font-weight-medium mt-4">Switch</v-label>
      <v-row>
        <v-col cols="12" md="3" sm="6">
          <v-switch v-model="model" color="primary" hide-details inset label="Enter text" />
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-switch color="primary" hide-details inset label="Enter text" />
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-switch disabled hide-details inset label="Disabled" />
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-switch v-model="model" color="primary" disabled hide-details inset label="Disabled" />
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="12" md="6">
          <v-btn class="mr-3" color="primary" flat>add new</v-btn>
          <v-btn class="mr-3" color="primary" disabled>add new</v-btn>
          <v-btn class="mr-3" color="primary" variant="outlined">add new</v-btn>
        </v-col>
        <v-col class="d-flex justify-end" cols="12" md="6">
          <v-btn class="mr-3" color="info" flat>add new</v-btn>
          <v-btn color="success" flat>add new</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
