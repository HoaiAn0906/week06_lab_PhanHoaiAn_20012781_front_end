<script setup lang="ts">
import { basicTableData1 } from '@/_mockApis/components/table/basicTables'
</script>
<template>
  <v-card class="border" elevation="0">
    <v-table class="month-table">
      <thead>
        <tr>
          <th class="text-h6">Users</th>
          <th class="text-h6">Project Name</th>
          <th class="text-h6">Team</th>
          <th class="text-h6">Status</th>
          <th class="text-h6">Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in basicTableData1" :key="item.name" class="month-item">
          <td>
            <div class="d-flex align-center">
              <v-avatar size="40">
                <img alt="avatar" height="40" :src="item.avatar" />
              </v-avatar>
              <div class="ml-4">
                <h6 class="text-h6">{{ item.name }}</h6>
                <div class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">{{ item.post }}</div>
              </div>
            </div>
          </td>
          <td>
            <h6 class="text-h6 font-weight-medium text-medium-emphasis text-no-wrap">{{ item.pname }}</h6>
          </td>
          <td>
            <div class="d-flex align-center">
              <div class="ml-2 d-flex flex-row-reverse">
                <v-avatar
                  v-for="team in item.teams"
                  :key="team.id"
                  :class="'ml-n2 avtar-border bg-' + team.color"
                  size="35"
                >
                  {{ team.text }}
                </v-avatar>
              </div>
            </div>
          </td>
          <td>
            <v-chip class="font-weight-bold" :color="item.statuscolor" label rounded="md" size="small">
              {{ item.status }}
            </v-chip>
          </td>
          <td>
            <h6 class="text-h6">{{ item.budget }}</h6>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
