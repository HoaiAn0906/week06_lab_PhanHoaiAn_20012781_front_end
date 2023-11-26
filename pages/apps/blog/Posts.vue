<script setup lang="ts">
import { ref } from 'vue'
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import BlogPosts from '@/components/apps/blog/blogPosts.vue'

// theme breadcrumb
const page = ref({ title: 'Blog app' })
const breadcrumbs = ref([
  {
    text: 'Get the latest news',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->
  <base-breadcrumb :breadcrumbs="breadcrumbs" :title="page.title" />
  <v-row>
    <v-col cols="12">
      <blog-posts />
    </v-col>
  </v-row>
</template>
