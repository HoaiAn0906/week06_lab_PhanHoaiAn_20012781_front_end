<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
const chartOptions = computed(() => {
  return {
    series: [
      {
        name: '',
        data: [5, 0, 12, 1, 8, 3, 12, 15],
      },
    ],

    colors: ['#fff'],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: 'rgba(255, 255, 255, 0.5)',
    },
    tooltip: {
      theme: 'dark',
    },
  }
})
const Chart = {
  series: [
    { name: 'Ample', data: [355, 390, 300, 350, 390, 180, 250] },
    { name: 'Pixel', data: [280, 250, 325, 215, 250, 310, 170] },
  ],
}
const elementVisible = ref(false)
onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10)
})
</script>
<template>
  <VCard class="overflow-hidden" elevation="10">
    <v-card-text class="bg-info">
      <div class="d-flex align-center">
        <v-icon size="30">mdi-twitter</v-icon>
        <div class="mx-4">
          <h3 class="text-h5">Bandwidth usage</h3>
          <div class="text-subtitle-1">March 2021</div>
        </div>
      </div>
      <v-row class="mt-1">
        <v-col class="d-flex align-center" cols="5">
          <h2 class="font-weight-medium white--text text-nowrap">$1.5M</h2>
        </v-col>
        <v-col cols="7">
          <div v-show="elementVisible" class="float-right">
            <apexchart height="70px" :options="chartOptions" :series="chartOptions.series" type="line" width="150px" />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </VCard>
</template>
