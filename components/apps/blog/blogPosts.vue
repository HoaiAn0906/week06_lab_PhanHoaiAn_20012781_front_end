<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BlogGrid from './blogCardGrid.vue'
import FeatuteBlogCard from './featureBlogCard.vue'

const { $api } = useNuxtApp()
const posts = ref([])

const fetchPosts = () => {
  $api.posts.getPosts().then((res) => {
    posts.value = res
    console.log('posts', posts.value)
  })
}

onMounted(() => {
  fetchPosts()
})

const filterFeaturedpost = computed(() => {
  return posts.value.filter((post) => {
    return post
  })
})
</script>
<template>
  <v-row>
    <template v-for="(post, i) in filterFeaturedpost" :key="post.id">
      <featute-blog-card :index="i" :post="post" />
    </template>
    <template v-for="(post, i) in posts" :key="post.id">
      <blog-grid :post="post" />
    </template>
  </v-row>
</template>
