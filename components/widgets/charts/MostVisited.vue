<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPrimary, getSecondary } from '@/utils/UpdateColors'
const select = ref('March 2022')
const items = ref(['March 2022', 'April 2022', 'May 2022'])

/* Chart */
const chartOptions = computed(() => {
  return {
    chart: {
      height: 250,
      type: 'bar',
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    colors: [getPrimary.value, getSecondary.value],
    plotOptions: {
      bar: {
        borderRadius: [6],
        horizontal: false,
        barHeight: '60%',
        columnWidth: '40%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06'],
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      x: {
        show: false,
      },
    },
  }
})
const Chart = [
  {
    name: 'San Francisco',
    data: [44, 55, 41, 67, 22, 43],
  },
  {
    name: 'Diego',
    data: [13, 23, 20, 8, 13, 27],
  },
]
</script>

<template>
  <v-card class="mt-6" elevation="10">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between">
        <v-card-title class="text-h5">Most Visited</v-card-title>
        <div class="my-sm-0 my-2">
          <v-select
            v-model="select"
            class="text-body-1"
            density="compact"
            hide-details
            :items="items"
            variant="outlined"
          />
        </div>
      </div>
      <apexchart height="250" :options="chartOptions" :series="Chart" type="bar" />
      <div class="d-flex align-center pb-1 justify-center">
        <h6 class="text-subtitle-1 text-medium-emphasis d-flex align-center">
          <v-icon class="mr-2" color="primary" icon="mdi mdi-checkbox-blank-circle" size="10" />
          San Francisco
        </h6>
        <h6 class="text-subtitle-1 text-medium-emphasis pl-5 d-flex align-center">
          <v-icon class="mr-2" color="secondary" icon="mdi mdi-checkbox-blank-circle" size="10" />
          Diego
        </h6>
      </div>
    </v-card-item>
  </v-card>
</template>
