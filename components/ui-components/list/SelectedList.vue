<script setup lang="ts">
import { ref } from 'vue'
import { AppsIcon } from 'vue-tabler-icons'
const props = defineProps(['icon'])
const component = props.icon
// List 1,3 Data
const list1 = ref([
  {
    name: 'Sample Page',
    icon: AppsIcon,
    id: 1,
    link: '/',
  },
  {
    name: 'Elements',
    icon: AppsIcon,
    id: 2,
    link: '',
  },
  {
    name: 'Page Layouts',
    icon: AppsIcon,
    id: 3,
    link: '',
  },
])
</script>
<template>
  <v-list>
    <v-list-item
      v-for="(list, i) in list1"
      :key="i"
      active-color="primary"
      class="mb-1"
      rounded="md"
      :to="list.link"
      :value="list"
    >
      <template #prepend>
        <component :is="list.icon" class="mr-2" size="20" stroke-width="1.5" />
      </template>
      <v-list-item-title v-text="list.name" />
    </v-list-item>
  </v-list>
</template>
