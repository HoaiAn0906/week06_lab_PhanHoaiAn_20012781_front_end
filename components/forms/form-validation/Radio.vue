<script setup lang="ts">
import { ref, computed } from 'vue'
// Checkbox radio button
const drinks = ref([
  { id: 1, name: 'None' },
  { id: 2, name: 'Tea' },
  { id: 3, name: 'Coffee' },
])

const selectedRadioValues = ref([])
const myRadioform = ref(null)
const validateRadio = computed(() => {
  return [selectedRadioValues.value.length > 0 || 'Choose at-list one Drink']
})
</script>
<template>
  <v-form ref="myRadioform">
    <div class="d-flex gap-3">
      <v-radio-group
        v-for="drink in drinks"
        :key="drink.id"
        v-model="selectedRadioValues"
        hide-details
        :rules="validateRadio"
      >
        <v-radio color="primary" :label="drink.name" :value="drink.id" />
      </v-radio-group>
    </div>
    <p v-if="selectedRadioValues.length < 1" class="text-error mb-4 text-subtitle-2">You have to choose one Drink</p>
    <div class="d-flex justify-sm-end">
      <v-btn class="mt-3" color="primary" flat @click="myRadioform">Submit</v-btn>
    </div>
  </v-form>
</template>
