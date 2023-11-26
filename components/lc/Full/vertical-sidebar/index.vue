<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import sidebarItems from './sidebarItem'
import { useCustomizerStore } from '@/stores/customizer'
const customizer = useCustomizerStore()
const sidebarMenu = shallowRef(sidebarItems)
</script>

<template>
  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer"
    app
    class="leftSidebar"
    elevation="0"
    expand-on-hover
    left
    mobile-breakpoint="960"
    :rail="customizer.mini_sidebar"
    rail-width="75"
    width="270"
  >
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <div class="sidebar_profile border-bottom">
        <v-list class="bg-muted">
          <v-list-item class="pa-4 ml-1">
            <v-list-item-title class="text-h6">Julia Roberts</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-1">Web Designer</v-list-item-subtitle>
            <template #prepend class="me-0">
              <v-avatar class="me-0" size="45">
                <img src="/images/profile/user2.jpg" width="50" />
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>
      </div>
      <v-list class="py-5 px-4 bg-muted" density="compact">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu">
          <!---Item Sub Header -->
          <LcFullVerticalSidebarNavGroup v-if="item.header" :key="item.title" :item="item" />
          <!---If Has Child -->
          <LcFullVerticalSidebarNavCollapse v-else-if="item.children" class="leftPadding" :item="item" :level="0" />
          <!---Single Item-->
          <LcFullVerticalSidebarNavItem v-else class="leftPadding" :item="item" />
          <!---End Single Item-->
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
