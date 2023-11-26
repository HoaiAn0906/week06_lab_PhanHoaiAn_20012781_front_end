<script setup lang="ts">
import { ref } from 'vue'
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import BlogDetail from '@/components/apps/blog/detail/blogDetail.vue'

// theme breadcrumb
const page = ref({ title: 'Blog Detail' })
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->
  <v-row>
    <v-col cols="12">
      <blog-detail />
    </v-col>
  </v-row>
</template>
