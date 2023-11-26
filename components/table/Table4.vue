<script setup lang="ts">
import { basicTableData4, tableActionData } from '@/_mockApis/components/table/basicTables'
</script>
<template>
  <v-card class="mt-6 border" elevation="0">
    <v-table class="month-table">
      <thead>
        <tr>
          <th class="text-h6">Invoice</th>
          <th class="text-h6">Status</th>
          <th class="text-h6">Customer</th>
          <th class="text-h6">Progress</th>
          <th class="text-h6" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in basicTableData4" :key="item.name" class="month-item">
          <td>
            <h6 class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">{{ item.invoice }}</h6>
          </td>
          <td>
            <v-chip class="font-weight-bold py-4 pl-1 pr-2" :color="item.statuscolor" rounded="lg" size="small">
              <component :is="item.statusicon" class="mr-1" size="18" stroke-width="2" />
              {{ item.status }}
            </v-chip>
          </td>
          <td>
            <div class="d-flex align-center">
              <v-avatar size="40">
                <img alt="avatar" height="40" :src="item.avatar" />
              </v-avatar>
              <div class="ml-4">
                <h6 class="text-h6 text-no-wrap">{{ item.name }}</h6>
                <div class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">
                  {{ item.handle }}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <v-progress-linear color="primary" :model-value="item.progress" rounded="sm" />
              <span class="text-subtitle-1 text-medium-emphasis">{{ item.progress }}%</span>
            </div>
          </td>
          <td>
            <v-btn class="grey100" icon size="30" variant="flat">
              <v-avatar size="22">
                <DotsVerticalIcon color="grey100" size="20" />
              </v-avatar>
              <v-menu activator="parent">
                <v-list>
                  <v-list-item
                    v-for="list in tableActionData"
                    :key="list.listtitle"
                    hide-details
                    min-height="38"
                    value="action"
                  >
                    <v-list-item-title>
                      <v-avatar class="mr-2" size="20">
                        <component :is="list.icon" size="20" stroke-width="2" />
                      </v-avatar>
                      {{ list.listtitle }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
