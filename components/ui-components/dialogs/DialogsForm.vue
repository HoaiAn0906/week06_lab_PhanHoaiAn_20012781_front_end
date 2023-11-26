<script setup lang="ts">
import { ref } from 'vue'
const dialog = ref(false)
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="text-center">
    <v-dialog v-model="dialog" persistent>
      <template #activator="{ props }">
        <v-btn class="w-100" color="warning" v-bind="props" flat>Open Form Dialog</v-btn>
      </template>
      <v-card class="overflow-auto" style="height: 400px">
        <v-container>
          <v-card-title class="pa-5">
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4" sm="6">
                <v-text-field label="Legal first name*" required />
              </v-col>
              <v-col cols="12" md="4" sm="6">
                <v-text-field hint="example of helper text only on focus" label="Legal middle name" />
              </v-col>
              <v-col cols="12" md="4" sm="6">
                <v-text-field
                  hint="example of persistent helper text"
                  label="Legal last name*"
                  persistent-hint
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" required type="password" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                />
              </v-col>
            </v-row>

            <small>*indicates required field</small>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="error" flat text @click="dialog = false">Close</v-btn>
            <v-btn color="success" flat text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
