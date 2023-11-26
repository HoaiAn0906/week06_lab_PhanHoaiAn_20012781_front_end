<script setup lang="ts">
import { ref } from 'vue'
const dialogm1 = ref('')
const dialog = ref(false)
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" scrollable>
      <template #activator="{ props }">
        <v-btn class="w-100" color="success" v-bind="props" flat>Open Scrolling Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider />
        <v-card-text class="overflow-auto" style="height: 300px">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Bahamas, The" value="bahamas" />
            <v-radio label="Bahrain" value="bahrain" />
            <v-radio label="Bangladesh" value="bangladesh" />
            <v-radio label="Barbados" value="barbados" />
            <v-radio label="Belarus" value="belarus" />
            <v-radio label="Belgium" value="belgium" />
            <v-radio label="Belize" value="belize" />
            <v-radio label="Benin" value="benin" />
            <v-radio label="Bhutan" value="bhutan" />
            <v-radio label="Bolivia" value="bolivia" />
            <v-radio label="Bosnia and Herzegovina" value="bosnia" />
            <v-radio label="Botswana" value="botswana" />
            <v-radio label="Brazil" value="brazil" />
            <v-radio label="Brunei" value="brunei" />
            <v-radio label="Bulgaria" value="bulgaria" />
            <v-radio label="Burkina Faso" value="burkina" />
            <v-radio label="Burma" value="burma" />
            <v-radio label="Burundi" value="burundi" />
          </v-radio-group>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn color="error" text @click="dialog = false">Close</v-btn>
          <v-btn color="success" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
