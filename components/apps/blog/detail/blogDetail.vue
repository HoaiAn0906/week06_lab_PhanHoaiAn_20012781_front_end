<script setup lang="ts">
import { format } from 'date-fns'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import AddComment from './addCommnet.vue'

const route = useRoute()
const { $api } = useNuxtApp()
const post = ref(null)
const dialog = ref(false)
const loading = ref(false)
const formTitle = computed(() => {
  return 'New Comment'
})
const valid = ref(true)
const comments = ref(null)

const fetchPost = async () => {
  await $api.posts.getPost(route.params.id).then((res) => {
    post.value = res
  })
}

const fetchComments = async () => {
  await $api.postComments.getPostCommentsByPostId(route.params.id).then((res) => {
    comments.value = res
  })
}

onMounted(() => {
  fetchPost()
  fetchComments()
})

const editedItem = ref({
  id: null,
  content: null,
  title: null,
  post_id: null,
  user_id: null,
})

const defaultItem = ref({
  id: null,
  content: null,
  title: null,
  post_id: null,
  user_id: null,
})

const save = () => {
  loading.value = true
  const data = {
    content: editedItem.value.content,
    title: editedItem.value.title,
    post_id: route.params.id,
    user_id: null,
    email: 'admin@yopmail.com',
  }
  $api.postComments
    .createPostComment(data)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      loading.value = false
      fetchPost()
    })
  close()
}

const close = () => {
  dialog.value = false
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
  }, 300)
}
</script>
<template>
  <v-row v-if="post" class="blog-detail">
    <v-col cols="12">
      <v-card elevation="10" rounded="md">
        <v-img
          class="rounded-t-md align-end text-right"
          cover
          height="440"
          :src="post.coverImage || 'https://source.unsplash.com/random'"
        >
          <v-card-item>
            <v-chip class="bg-surface text-body-2 font-weight-medium" size="small" v-text="post.view || '2 min read'" />
          </v-card-item>
        </v-img>
        <v-avatar class="mt-n7 mx-6" size="40">
          <img alt="icon" height="40" :src="post.author?.avatar || 'https://source.unsplash.com/random'" />
        </v-avatar>
        <v-card-item class="pt-4">
          <v-chip
            class="text-body-2 font-weight-medium bg-grey100"
            size="small"
            v-text="post.category || 'Uncategorized'"
          />
          <h1 class="text-h1 my-6">{{ post.title }}</h1>
          <span>{{ post.content }}</span>
          <div class="d-flex align-center justify-space-between">
            <div>
              <v-avatar class="" size="18">
                <EyeIcon size="18" />
              </v-avatar>
              <span class="text-subtitle-1 ml-2" v-text="post.view || 0" />
              <v-avatar class="ml-4" size="18">
                <Message2Icon size="18" />
              </v-avatar>
              <span class="text-subtitle-1 ml-2" v-text="post.postComments?.length" />
            </div>
            <div v-if="post.createdAt">
              <v-avatar size="10">
                <CircleIcon size="10" />
              </v-avatar>
              <span class="text-subtitle-2 ml-2" v-text="format(new Date(post.createdAt), 'E, MMM d')" />
            </div>
          </div>
        </v-card-item>
        <v-divider />
      </v-card>
      <v-card class="pa-6 mt-6" elevation="10" rounded="md">
        <div class="d-flex justify-space-between align-center">
          <h3 class="text-h4 mb-6">
            Comments
            <v-chip class="bg-primary" size="small" v-text="post.postComments?.length" />
          </h3>
          <v-dialog v-model="dialog" max-width="1000">
            <template #activator="{ props }">
              <v-spacer />
              <v-btn v-bind="props" color="primary" flat :loading="loading">
                <v-icon class="mr-2">mdi-plus</v-icon>
                Add Comment
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="pa-4 bg-secondary">
                <span class="title text-white">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.title" hide-details label="Title" variant="outlined" />
                    </v-col>
                    <v-col cols="12">
                      <v-textarea v-model="editedItem.content" hide-details label="Content" variant="outlined" />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>

              <v-card-actions class="pa-4">
                <v-spacer />
                <v-btn color="error" @click="close">Cancel</v-btn>
                <v-btn color="secondary" variant="flat" @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <template v-for="(comment, i) in comments" :key="i">
          <add-comment :comments="comment" />
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
