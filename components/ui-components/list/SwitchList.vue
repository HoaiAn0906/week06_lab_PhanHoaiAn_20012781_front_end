<script setup lang="ts">
import { ref } from 'vue'
import { WifiIcon, BluetoothIcon } from 'vue-tabler-icons'
// List 4 data
const swt1 = ref(true)
const swt2 = ref(false)
</script>
<template>
  <v-list>
    <v-card class="py-2" variant="outlined">
      <v-list-item active-color="primary" class="mb-2" value="wifi">
        <div class="d-flex align-center">
          <wifi-icon class="mr-2" size="22" stroke-width="1.5" />
          <div class="ml-3">Wi-Fi</div>
          <div class="ml-auto"><v-switch v-model="swt1" color="primary" hide-details inset /></div>
        </div>
      </v-list-item>
      <v-list-item active-color="primary" class="mb-2" value="bluetooth">
        <div class="d-flex align-center">
          <bluetooth-icon class="mr-2" size="22" stroke-width="1.5" />
          <div class="ml-3">Bluetooth</div>
          <div class="ml-auto"><v-switch v-model="swt2" color="primary" hide-details inset /></div>
        </div>
      </v-list-item>
    </v-card>
  </v-list>
</template>
