<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPrimary, getSecondary } from '@/utils/UpdateColors'
/* Chart 1 */
const Chart1 = computed(() => {
  return {
    series: [5, 15],
    labels: ['New', 'Old'],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {},
    plotOptions: {
      pie: {
        donut: {
          size: '85px',
        },
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    colors: ['#fff', 'rgba(0, 0, 0, 0.2)'],
    tooltip: {
      enabled: true,
      theme: 'dark',
      fillSeriesColor: false,
    },
  }
})

/* Chart 2 */
const Chart2 = computed(() => {
  return {
    series: [4, 15],
    labels: ['Mobile', 'Desktop'],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {},
    plotOptions: {
      pie: {
        donut: {
          size: '85px',
        },
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    colors: ['#fff', 'rgba(0, 0, 0, 0.2)'],
    tooltip: {
      enabled: true,
      theme: 'dark',
      fillSeriesColor: false,
    },
  }
})

/* Chart 3 */
const Chart3 = computed(() => {
  return {
    series: [11, 15],
    labels: ['Social', 'Organic'],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {},
    plotOptions: {
      pie: {
        donut: {
          size: '85px',
        },
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    colors: ['#fff', 'rgba(0, 0, 0, 0.2)'],
    tooltip: {
      enabled: true,
      theme: 'dark',
      fillSeriesColor: false,
    },
  }
})

/* Chart 4 */
const Chart4 = computed(() => {
  return {
    series: [20, 15],
    labels: ['Home', 'Detail'],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {},
    plotOptions: {
      pie: {
        donut: {
          size: '85px',
        },
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    colors: ['#fff', 'rgba(0, 0, 0, 0.2)'],
    tooltip: {
      enabled: true,
      theme: 'dark',
      fillSeriesColor: false,
    },
  }
})
</script>
<template>
  <v-row>
    <!-- First Card -->
    <v-col cols="12" lg="3" sm="6">
      <v-card color="primary" elevation="10">
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="text-h4">324</h2>
              <h5 class="text-subtitle-1">New Clients</h5>
            </v-col>
            <v-col class="pa-0" cols="6">
              <div class="d-flex justify-end pt-3">
                <apexchart :options="Chart1" :series="Chart1.series" type="donut" width="80" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Second Card -->
    <v-col cols="12" lg="3" sm="6">
      <v-card color="secondary" elevation="10">
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="text-h4">2376</h2>
              <h5 class="text-subtitle-1">Total Visits</h5>
            </v-col>
            <v-col class="pa-0" cols="6">
              <div class="d-flex justify-end pt-3">
                <apexchart :options="Chart2" :series="Chart2.series" type="donut" width="80" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Third Card -->
    <v-col cols="12" lg="3" sm="6">
      <v-card color="info" elevation="10">
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="text-h4">1795</h2>
              <h5 class="text-subtitle-1">New Leads</h5>
            </v-col>
            <v-col class="pa-0" cols="6">
              <div class="d-flex justify-end pt-3">
                <apexchart :options="Chart3" :series="Chart3.series" type="donut" width="80" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Fourth Card -->
    <v-col cols="12" lg="3" sm="6">
      <v-card color="error" elevation="10">
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="text-h4">36870</h2>
              <h5 class="text-subtitle-1">Page Views</h5>
            </v-col>
            <v-col class="pa-0" cols="6">
              <div class="d-flex justify-end pt-3">
                <apexchart :options="Chart4" :series="Chart4.series" type="donut" width="80" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
