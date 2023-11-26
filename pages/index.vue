<script setup lang="ts">
import { ref } from 'vue'

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import TheEarningCard from '@/components/dashboards/minimal/TheEarningCard.vue'
import TheSalesOverview from '@/components/dashboards/minimal/TheSalesOverview.vue'
import Visits from '@/components/dashboards/minimal/Visits.vue'
import EarningReportTable from '@/components/dashboards/minimal/EarningReportTable.vue'
import RecentComments from '@/components/dashboards/minimal/RecentComments.vue'
import TheBandwidthUsage from '@/components/dashboards/analytical/TheBandwidthUsage.vue'
import TheDownloadCount from '@/components/dashboards/analytical/TheDownloadCount.vue'
import TheSocialCount from '@/components/dashboards/minimal/TheSocialCount.vue'
import TheProfileCard from '@/components/dashboards/analytical/TheProfileCard.vue'
import TheMyContacts from '@/components/dashboards/analytical/TheMyContacts.vue'
import TheActivityTimeline from '@/components/dashboards/analytical/TheActivityTimeline.vue'

const page = ref({ title: 'Minimal' })
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#',
  },
  {
    text: 'Minimal',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <base-breadcrumb :breadcrumbs="breadcrumbs" :title="page.title" />
  <v-row class="mt-3">
    <!---Earning card---->
    <v-col cols="12" lg="12">
      <the-earning-card />
    </v-col>
    <!---Sales Overview---->
    <v-col cols="12" lg="8">
      <the-sales-overview />
    </v-col>
    <!---Visits---->
    <v-col cols="12" lg="4">
      <visits />
    </v-col>
    <!---EarningReport---->
    <v-col cols="12" lg="6">
      <earning-report-table />
    </v-col>
    <!---TheRecentComments---->
    <v-col cols="12" lg="6">
      <recent-comments />
    </v-col>
    <!---Bandwidth usage--->
    <v-col cols="12" lg="4" sm="12">
      <the-bandwidth-usage />
    </v-col>
    <!---Download count--->
    <v-col cols="12" lg="4" sm="12">
      <the-download-count />
    </v-col>
    <!---TheSocial Count--->
    <v-col cols="12" lg="4" sm="12">
      <the-social-count />
    </v-col>
    <!---Profile card /my contacts--->
    <v-col cols="12" lg="4" sm="12">
      <the-profile-card />
      <div class="mt-7" />
      <the-my-contacts />
    </v-col>
    <!---Activity timeline tabs--->
    <v-col cols="12" lg="8" sm="12">
      <the-activity-timeline />
    </v-col>
  </v-row>
</template>
