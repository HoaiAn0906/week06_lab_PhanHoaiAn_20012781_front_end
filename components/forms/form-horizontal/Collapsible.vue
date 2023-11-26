<script setup lang="ts">
import { ref } from 'vue'
// icons
import { HelpIcon } from 'vue-tabler-icons'

const radioColumn = ref('1')
const radioInline = ref('1')
const paymentradio = ref('1')
</script>
<template>
  <h5 class="text-h5 mb-6 mt-3">Collapsible Section</h5>
  <v-expansion-panels>
    <!---Delivery Address--->
    <v-expansion-panel elevation="10">
      <v-expansion-panel-title class="text-h6">Delivery Address</v-expansion-panel-title>
      <v-expansion-panel-text class="mt-4">
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="align-center mb-3">
              <v-col class="pb-sm-3 pb-0 text-right" cols="12" sm="3">
                <v-label class="font-weight-medium">Full Name</v-label>
              </v-col>
              <v-col cols="12" sm="9">
                <v-text-field color="primary" hide-details placeholder="John Deo" type="text" variant="outlined" />
              </v-col>
            </v-row>
            <v-row class="align-center mb-3">
              <v-col class="pb-sm-3 pb-0 text-right" cols="12" sm="3">
                <v-label class="font-weight-medium">Address</v-label>
              </v-col>
              <v-col cols="12" sm="9">
                <v-textarea
                  auto-grow
                  color="primary"
                  hide-details
                  placeholder="150, Ring Road"
                  row-height="25"
                  rows="2"
                  shaped
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row class="align-center mb-3">
              <v-col class="pb-sm-3 pb-0 text-right" cols="12" sm="3">
                <v-label class="font-weight-medium">City</v-label>
              </v-col>
              <v-col cols="12" sm="9">
                <v-text-field color="primary" hide-details placeholder="Vadodara" type="text" variant="outlined" />
              </v-col>
            </v-row>
            <v-row class="align-start">
              <v-col class="pb-sm-3 pb-0 text-right" cols="12" sm="3">
                <v-label class="mt-sm-2 mt-0 font-weight-medium">Address Type</v-label>
              </v-col>
              <v-col cols="12" sm="9">
                <v-radio-group v-model="radioColumn" class="ml-n3" column hide-details>
                  <v-radio color="primary" label="Home (All day delivery)" value="1" />
                  <v-radio color="primary" label="Office (Delivery between 10 AM - 5 PM)" value="2" />
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-row class="align-center mb-3">
              <v-col class="pb-sm-3 pb-0 text-right" cols="12" sm="3">
                <v-label class="font-weight-medium">Phone No</v-label>
              </v-col>
              <v-col cols="12" sm="9">
                <v-text-field color="primary" hide-details placeholder="1340 2154 123" type="text" variant="outlined" />
              </v-col>
            </v-row>
            <v-row class="align-center mb-3">
              <v-col class="pb-sm-3 pb-0 text-right" cols="12" sm="3">
                <v-label class="font-weight-medium">Pincode</v-label>
              </v-col>
              <v-col cols="12" sm="9">
                <v-text-field color="primary" hide-details placeholder="120125" type="text" variant="outlined" />
              </v-col>
            </v-row>
            <v-row class="align-center mb-3">
              <v-col class="pb-sm-3 pb-0 text-right" cols="12" sm="3">
                <v-label class="font-weight-medium">Landmark</v-label>
              </v-col>
              <v-col cols="12" sm="9">
                <v-text-field
                  color="primary"
                  hide-details
                  placeholder="Nr.Wall Street"
                  type="text"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!---Delivery Options--->
    <v-expansion-panel class="mt-3" elevation="10">
      <v-expansion-panel-title class="text-h6">Delivery Options</v-expansion-panel-title>
      <v-expansion-panel-text class="mt-4">
        <v-radio-group v-model="radioInline" class="ml-n3" hide-details inline>
          <v-radio color="primary" label="Standard 3-5 Days" value="1" />
          <v-radio color="primary" label="Express" value="2" />
          <v-radio color="primary" label="Overnight" value="3" />
        </v-radio-group>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!---Payment Method--->
    <v-expansion-panel class="mt-3" elevation="10">
      <v-expansion-panel-title class="text-h6">Payment Method</v-expansion-panel-title>
      <v-expansion-panel-text class="mt-4">
        <v-radio-group v-model="paymentradio" class="ml-n3" hide-details inline>
          <v-radio color="primary" label="Credit/Debit/ATM Card" value="1" />
          <v-radio color="primary" label="Cash on Delivery" value="2" />
        </v-radio-group>
        <v-row class="mt-4">
          <v-col cols="12" md="8">
            <v-label class="mb-2 font-weight-medium">Card Number</v-label>
            <v-text-field color="primary" placeholder="1250 4521 5630 1540" type="text" variant="outlined" />
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">Name</v-label>
                <v-text-field color="primary" hide-details placeholder="John Deo" type="text" variant="outlined" />
              </v-col>
              <v-col cols="12" md="3" sm="6">
                <v-label class="mb-2 font-weight-medium">Exp. Date</v-label>
                <v-text-field color="primary" hide-details placeholder="MM/YY" type="text" variant="outlined" />
              </v-col>
              <v-col cols="12" md="3" sm="6">
                <v-label class="mb-2 font-weight-medium">CVV Code</v-label>
                <v-text-field color="primary" hide-details placeholder="456" type="text" variant="outlined">
                  <template #append-inner>
                    <help-icon class="text-medium-emphasis ml-3" size="22" stroke-width="1.5" />
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" flat>Submit</v-btn>
            <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
