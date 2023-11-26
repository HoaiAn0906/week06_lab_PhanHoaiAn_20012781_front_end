<script setup lang="ts">
import { ref, computed } from 'vue'
import type { DotsIcon } from 'vue-tabler-icons'
import { getPrimary, getSecondary } from '@/utils/UpdateColors'
import { weeklyStatesData } from '@/_mockApis/components/dashboards/MinimalData'
/* Chart */
const chartOptions = computed(() => {
  return {
    series: [
      {
        name: 'Weekly Stats',
        data: [40, 60, 50, 65],
      },
    ],
    colors: [getSecondary.value],
    fill: {
      colors: getSecondary.value,
      opacity: 0.05,
      type: 'solid',
    },
    chart: {
      type: 'area',
      height: 135,
      toolbar: {
        show: false,
      },
      foreColor: '#adb0bb',
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: 'smooth',
    },
    tooltip: {
      theme: 'dark',
    },
  }
})
const items = ref([{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }])
</script>

<template>
  <v-card class="overflow-hidden" elevation="10">
    <span class="lstick" />
    <v-card-text>
      <div class="d-flex align-center mb-7">
        <div>
          <h2 class="text-h5 title mb-1">Weekly Stats</h2>
          <h5 class="text-subtitle-1">Overview of week</h5>
        </div>
        <div class="ml-auto">
          <v-menu bottom left>
            <template #activator="{ props }">
              <v-btn color="inherit" v-bind="props" flat icon>
                <DotsIcon size="20" stroke-width="1.5" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <!-- lists -->
      <div v-for="(item, i) in weeklyStatesData" :key="i" class="px-0">
        <div class="d-flex align-center py-4">
          <div class>
            <v-btn class="mr-3" :color="item.color" elevation="0" flat icon size="small">
              <component :is="item.icon" size="18" stroke-width="2" />
            </v-btn>
          </div>
          <div class="ml-2">
            <h4 class="text-h6 mb-1 mt-n1">
              {{ item.title }}
            </h4>
            <span class="text-grey-darken-1 text-subtitle-2 d-block text-truncate">{{ item.desc }}</span>
          </div>
          <div class="ml-auto">
            <v-chip class="font-weight-bold" color="inherit" label size="small">+{{ item.percent }}%</v-chip>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <apexchart height="135px" :options="chartOptions" :series="chartOptions.series" type="area" />
      </div>
    </v-card-text>
  </v-card>
</template>
