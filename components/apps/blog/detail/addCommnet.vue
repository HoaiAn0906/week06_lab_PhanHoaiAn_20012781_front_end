<script setup lang="ts">
import { format } from 'date-fns'
import { useRoute } from 'vue-router'
const props = defineProps({ comments: Object })

const route = useRoute()
const { $api } = useNuxtApp()
const post = ref(null)
const dialog = ref(false)
const loading = ref(false)
const formTitle = computed(() => {
  return 'Add Reply'
})
const valid = ref(true)

const editedItem = ref({
  id: null,
  content: null,
  title: null,
  post_id: null,
  user_id: null,
  parent_id: null,
})

const defaultItem = ref({
  id: null,
  content: null,
  title: null,
  post_id: null,
  user_id: null,
  parent_id: null,
})

const save = () => {
  loading.value = true
  const data = {
    content: editedItem.value.content,
    title: editedItem.value.title,
    post_id: route.params.id,
    user_id: null,
    parent_id: props.comments.id,
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
  <div v-if="comments">
    <v-card class="mb-5 pa-5 border-light" variant="flat">
      <div class="d-flex gap-3 align-center">
        <v-avatar size="30">
          <img alt="avatar" :src="comments.avatar || 'https://source.unsplash.com/random'" width="30" />
        </v-avatar>
        <div class="d-block d-sm-flex align-center gap-3">
          <h6 class="text-h6">{{ comments.title }}</h6>
          <span class="text-subtitle-2 opacity-50">
            <CircleIcon class="opacity-50 mr-1" fill="inherit" size="8" />
            {{ format(new Date(comments?.createdAt), 'E, MMM d') }}
          </span>
        </div>
      </div>
      <div class="py-3 text-body-1">
        {{ comments.content }}
      </div>
      <!---Like and comment count-->
      <div class="my-1 d-flex align-center gap-3">
        <v-tooltip text="Reply">
          <template #activator="{ props }">
            <v-dialog v-model="dialog" max-width="1000">
              <template #activator="{ props }">
                <v-spacer />
                <v-btn color="secondary" icon v-bind="props" size="x-small" variant="flat" @click="addReply">
                  <ArrowBackUpIcon size="16" />
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
          </template>
        </v-tooltip>
      </div>
    </v-card>
    <template v-for="(reply, i) in comments.postCommentChildren" :key="reply.id">
      <div class="ml-10">
        <v-card v-if="reply" class="mb-5 pa-5 border-light" variant="flat">
          <div class="d-flex gap-3 align-center">
            <v-avatar size="30">
              <img alt="avatar" :src="reply.avatar || 'https://source.unsplash.com/random'" width="30" />
            </v-avatar>
            <div class="d-block d-sm-flex align-center gap-3">
              <h6 class="text-h6">{{ reply.title }}</h6>
              <span class="text-subtitle-2 opacity-50">
                <CircleIcon class="opacity-50 mr-1" fill="inherit" size="8" />
                {{ format(new Date(reply?.createdAt), 'E, MMM d') }}
              </span>
            </div>
          </div>
          <div class="py-3 text-body-1">
            {{ reply.content }}
          </div>
        </v-card>
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.border-light {
  border: 1px solid rgb(var(--v-theme-grey100));
}
</style>
