<script setup lang="ts">
import { ref } from 'vue'
import { AppsIcon, CircleDotIcon, DragDropIcon, FolderIcon } from 'vue-tabler-icons'

const list1 = ref([
  {
    name: 'Sample Page',
    icon: 'AppsIcon',
  },
  {
    name: 'Elements',
    icon: 'CircleDotIcon',
  },
  {
    name: 'Page Layouts',
    icon: 'FolderIcon',
  },
  {
    name: 'Components',
    icon: 'DragDropIcon',
  },
])
</script>
<template>
  <v-list>
    <v-card class="py-2" variant="outlined">
      <v-list-item
        v-for="list in list1"
        :key="list.name"
        active-color="primary"
        class="mb-2"
        rounded="md"
        :value="list"
      >
        <template #prepend>
          <component :is="list.icon" class="mr-2" size="20" stroke-width="1.5" />
        </template>
        <v-list-item-title v-text="list.name" />
      </v-list-item>
    </v-card>
  </v-list>
</template>
