<script setup>
import Icon from '../Icon.vue'
const props = defineProps({ item: Object, level: Number })
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Item Childern -->
  <!-- ---------------------------------------------- -->
  <v-list-group no-action>
    <!-- ---------------------------------------------- -->
    <!---Dropdown  -->
    <!-- ---------------------------------------------- -->
    <template #activator="{ props }">
      <v-list-item v-bind="props" class="mb-1" rounded :value="item.title">
        <!---Icon  -->
        <template #prepend>
          <icon :item="item.icon" :level="level" />
        </template>
        <!---Title  -->
        <v-list-item-title class="mr-auto">{{ $t(item.title) }}</v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
          {{ item.subCaption }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Sub Item-->
    <!-- ---------------------------------------------- -->
    <template v-for="(subitem, i) in item.children" v-if="item.children" :key="i">
      <LcFullVerticalSidebarNavCollapse v-if="subitem.children" :item="subitem" :level="level + 1" />
      <LcFullVerticalSidebarNavItem v-else :item="subitem" :level="level + 1" />
    </template>
  </v-list-group>

  <!-- ---------------------------------------------- -->
  <!---End Item Sub Header -->
  <!-- ---------------------------------------------- -->
</template>
