<script setup>
import { useToast } from 'vue-toastification'
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'

const page = ref({ title: 'Post List' })
const breadcrumbs = ref([
  {
    title: 'Admin',
    disabled: false,
    to: '/admin',
  },
])
const dialog = ref(false)
const editedIndex = ref(-1)
const files = ref([])
const readers = ref([])
const fileValue = ref(null)
const { $api } = useNuxtApp()
const loading = ref(false)
const toast = useToast()
const items = ref([])
const valid = ref(true)

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New Post' : 'Edit Post'
})

const headers = [
  {
    title: 'Title',
    align: 'start',
    key: 'title',
  },
  {
    title: 'Meta Title',
    align: 'start',
    key: 'metaTitle',
  },
  {
    title: 'Content',
    align: 'start',
    key: 'content',
  },
  {
    title: 'Summary',
    align: 'start',
    key: 'summary',
  },
  {
    title: 'CoverImage',
    align: 'center',
    key: 'coverImage',
  },
  {
    title: 'Action',
    align: 'center',
    key: 'action',
  },
]

const editedItem = ref({
  id: null,
  parent_id: null,
  author_id: null,
  title: null,
  metaTitle: null,
  content: null,
  summary: null,
  published: null,
})

const defaultItem = ref({
  id: null,
  parent_id: null,
  author_id: null,
  title: null,
  meta_title: null,
  content: null,
  summary: null,
  published: null,
})

const queryBuilder = ref({
  sorts: ['-created_at'],
  page: 1,
  limit: 20,
})

const fetchPosts = async () => {
  const data = await $api.posts.getPosts()
  console.log(data)
  items.value = data
}

onMounted(() => {
  fetchPosts()
})

const addFiles = (e) => {
  files.value.forEach((file, f) => {
    readers.value[f] = new FileReader()
    readers.value[f].onloadend = (e) => {
      const fileData = readers.value[f].result
      const imgRef = fileValue.value[f]
      imgRef.src = fileData
    }

    readers.value[f].readAsDataURL(files.value[f])
  })
}

const save = () => {
  loading.value = true

  const formData = new FormData()
  formData.append('title', editedItem.value.title)
  formData.append('meta_title', editedItem.value.metaTitle)
  formData.append('content', editedItem.value.content)
  formData.append('summary', editedItem.value.summary)
  formData.append('cover_image', files.value[0])
  formData.append('email', 'admin@yopmail.com')
  $api.posts
    .createPost(formData)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      loading.value = false
      fetchPosts()
    })
  close()
}

const close = () => {
  dialog.value = false
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  }, 300)
}

const editItem = (item) => {
  editedIndex.value = items.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}

const deleteItem = (item) => {
  if (confirm('Are you sure you want to delete this item?') === false) {
    return false
  } else {
    $api.posts
      .deletePost(item.id)
      .then((res) => {
        toast.success(res.message)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        toast('Post deleted successfully')
        fetchPosts()
      })
  }
}
</script>

<template>
  <div class="tw-flex tw-items-center tw-mt-[-40px]">
    <base-breadcrumb :breadcrumbs="breadcrumbs" :title="page.title" />
    <v-spacer />
    <v-dialog v-model="dialog" max-width="1000">
      <template #activator="{ props }">
        <v-spacer />
        <v-btn v-bind="props" color="primary" flat :loading="loading">
          <v-icon class="mr-2">mdi-plus</v-icon>
          Add Blog
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
                <v-text-field v-model="editedItem.metaTitle" hide-details label="Meta Title" variant="outlined" />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.summary" hide-details label="Summary" variant="outlined" />
              </v-col>
              <v-col cols="12" sm="12">
                <v-textarea v-model="editedItem.content" hide-details label="Content" variant="outlined" />
              </v-col>
              <v-col cols="12">
                <v-file-input
                  v-model="files"
                  accept="image/*"
                  chips
                  color="pink"
                  label="Select files"
                  multiple
                  prepend-icon="mdi-camera"
                  @change="addFiles"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="(file, f) in files" :key="f" cols="2">
                {{ file.name }}
                <img
                  :ref="'fileValue'"
                  class="img-fluid tw-w-[100px] tw-h-[100px]"
                  src="//placehold.it/400/99cc77"
                  :title="'file' + f"
                />
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
  <v-card elevation="10">
    <v-card-text>
      <v-data-table :headers="headers" height="600" item-value="name" :items="items">
        <template #item.coverImage="{ item }">
          <v-img height="100px" :src="item.selectable.coverImage" />
        </template>
        <template #item.content="{ item }">
          <span class="text-body-2" v-text="item.selectable.content.slice(0, 100) + '...'"></span>
        </template>
        <template #item.action="{ item }">
          <v-btn flat icon @click="editItem(item.raw)">
            <PencilIcon class="text-primary" size="20" stroke-width="1.5" />
          </v-btn>
          <v-btn flat icon @click="deleteItem(item.raw)">
            <TrashIcon class="text-error" size="20" stroke-width="1.5" />
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
