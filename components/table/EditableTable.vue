<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useContactStore } from '@/stores/apps/contact'

import contact from '@/_mockApis/apps/contact'
import user1 from '~/images/profile/user-1.jpg'
const store = useContactStore()

onMounted(() => {
  store.fetchContacts()
})
const getContacts: any = computed(() => {
  return store.contacts
})

const valid = ref(true)
const dialog = ref(false)
const search = ref('')
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning'])
const desserts = ref(contact)
const editedIndex = ref(-1)
const editedItem = ref({
  id: '',
  avatar: user1,
  userinfo: '',
  usermail: '',
  phone: '',
  jdate: '',
  role: '',
  rolestatus: '',
})
const defaultItem = ref({
  id: '',
  avatar: user1,
  userinfo: '',
  usermail: '',
  phone: '',
  jdate: '',
  role: '',
  rolestatus: '',
})

// Methods
const filteredList = computed(() => {
  return desserts.value.filter((user: any) => {
    return user.userinfo.toLowerCase().includes(search.value.toLowerCase())
  })
})

function editItem(item: any) {
  editedIndex.value = desserts.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}
function deleteItem(item: any) {
  const index = desserts.value.indexOf(item)
  confirm('Are you sure you want to delete this item?') && desserts.value.splice(index, 1)
}

function close() {
  dialog.value = false
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  }, 300)
}
function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value)
  } else {
    desserts.value.push(editedItem.value)
  }
  close()
}

// Computed Property
const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New Contact' : 'Edit Contact'
})
</script>
<template>
  <v-row>
    <v-col cols="12" lg="4" md="6">
      <v-text-field v-model="search" density="compact" hide-details label="Search Contacts" variant="outlined" />
    </v-col>
    <v-col class="text-sm-right" cols="12" lg="8" md="6">
      <v-dialog v-model="dialog" max-width="500">
        <template #activator="{ props }">
          <v-btn v-bind="props" class="ml-auto" color="primary" flat>
            <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>
            Add Contact
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="pa-4 bg-secondary">
            <span class="title text-white">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedItem.id" hide-details label="Id" variant="outlined" />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedItem.userinfo" hide-details label="User info" variant="outlined" />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editedItem.usermail"
                    hide-details
                    label="User email"
                    type="email"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedItem.phone" hide-details label="Phone" type="phone" variant="outlined" />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedItem.jdate" hide-details label="Joining Date" variant="outlined" />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedItem.role" hide-details label="Role" variant="outlined" />
                </v-col>
                <v-col cols="12" sm="12">
                  <v-select
                    v-model="editedItem.rolestatus"
                    hide-details
                    :items="rolesbg"
                    label="Role Background"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-spacer />
            <v-btn color="error" @click="close">Cancel</v-btn>
            <v-btn
              color="secondary"
              :disabled="editedItem.userinfo == '' || editedItem.usermail == ''"
              variant="flat"
              @click="save"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
  <v-table class="mt-5">
    <thead>
      <tr>
        <th class="text-subtitle-1 font-weight-semibold">Id</th>
        <th class="text-subtitle-1 font-weight-semibold">UserInfo</th>
        <th class="text-subtitle-1 font-weight-semibold">Phone</th>
        <th class="text-subtitle-1 font-weight-semibold">Joining Date</th>
        <th class="text-subtitle-1 font-weight-semibold">Role</th>
        <th class="text-subtitle-1 font-weight-semibold">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredList" :key="item.id">
        <td class="text-subtitle-1">{{ item.id }}</td>
        <td>
          <div class="d-flex align-center py-4">
            <div>
              <v-img class="rounded-circle img-fluid" :src="item.avatar" width="45px" />
            </div>

            <div class="ml-5">
              <h4 class="text-h6 text-no-wrap">{{ item.userinfo }}</h4>
              <span class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">
                {{ item.usermail }}
              </span>
            </div>
          </div>
        </td>
        <td class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">{{ item.phone }}</td>
        <td class="text-subtitle-1 text-no-wrap font-weight-medium text-medium-emphasis">{{ item.jdate }}</td>
        <td>
          <v-chip :color="item.rolestatus" label size="small">{{ item.role }}</v-chip>
        </td>
        <td>
          <div class="d-flex align-center">
            <v-tooltip text="Edit">
              <template #activator="{ props }">
                <v-btn flat icon v-bind="props" @click="editItem(item)">
                  <PencilIcon class="text-primary" size="20" stroke-width="1.5" />
                </v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Delete">
              <template #activator="{ props }">
                <v-btn flat icon v-bind="props" @click="deleteItem(item)">
                  <TrashIcon class="text-error" size="20" stroke-width="1.5" />
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
