<script setup lang="ts">
import { ref } from 'vue'
const slider1 = ref(50)
const slider2 = ref(70)
const slider3 = ref(80)
const thumb = ref(30)
const tickLabels = ref({
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
})
const satisfactionEmojis = ref(['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'])

const slider = ref(45)
</script>
<template>
  <div>
    <v-slider v-model="thumb" color="primary" step="10" :thumb-size="30" />

    <v-slider v-model="slider1" color="secondary" />

    <v-slider v-model="slider2" color="primary" track-color="secondary" />

    <v-slider v-model="slider3" color="primary" thumb-color="secondary" />

    <v-slider color="primary" :max="3" show-ticks="always" step="1" tick-size="4" :ticks="tickLabels" />

    <v-slider v-model="slider" class="mt-6" color="primary" hide-details thumb-label="always">
      <template #thumb-label="{ modelValue }">
        {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
      </template>
    </v-slider>
  </div>
</template>
