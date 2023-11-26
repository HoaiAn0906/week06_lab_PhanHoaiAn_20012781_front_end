<script setup lang="ts">
import { basicTableData5, tableActionData } from '@/_mockApis/components/table/basicTables'
</script>
<template>
  <v-card class="mt-6 border" elevation="0">
    <v-table class="month-table">
      <thead>
        <tr>
          <th class="text-h6">Authors</th>
          <th class="text-h6">Courses</th>
          <th class="text-h6">Users</th>
          <th class="text-h6" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in basicTableData5" :key="item.name" class="month-item">
          <td>
            <div class="d-flex align-center">
              <v-avatar rounded="md" size="42">
                <img alt="avatar" height="42" :src="item.avatar" />
              </v-avatar>
              <div class="ml-4">
                <h6 class="text-subtitle-1 font-weight-bold">{{ item.name }}</h6>
                <div class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">
                  {{ item.handle }}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <div class="d-flex">
                <v-chip
                  v-for="course in item.courses"
                  :key="course.status"
                  class="mr-2"
                  :color="course.statuscolor"
                  rounded="lg"
                  size="small"
                >
                  {{ course.status }}
                </v-chip>
              </div>
            </div>
          </td>
          <td>
            <div class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">{{ item.users }}</div>
          </td>
          <td>
            <v-btn class="grey100" icon size="30" variant="flat">
              <v-avatar size="22">
                <DotsIcon color="grey100" size="20" />
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
