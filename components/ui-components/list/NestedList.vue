<script setup lang="ts">
import { ref } from 'vue'
import { CircleDotIcon, DragDropIcon, InboxIcon, MailIcon, SendIcon } from 'vue-tabler-icons'
const props = defineProps(['icon'])
// List 2 data
const open = ref(['Users'])
</script>
<template>
  <v-list>
    <v-card class="py-2" variant="outlined">
      <div class="text-subttile-2 pl-4 py-3">Nested List Items</div>
      <v-list-item active-color="primary" class="mb-2" value="">
        <template #prepend>
          <send-icon class="mr-2" size="20" stroke-width="1.5" />
        </template>
        <v-list-item-title>Sent Mail</v-list-item-title>
      </v-list-item>
      <v-list-item active-color="primary" class="mb-2" value="">
        <template #prepend>
          <mail-icon class="mr-2" size="20" stroke-width="1.5" />
        </template>
        <v-list-item-title>Drafts</v-list-item-title>
      </v-list-item>
      <v-list-group value="Users">
        <template #activator="{ props }">
          <v-list-item v-bind="props" active-color="primary" rounded="md" title="inbox">
            <template #prepend>
              <inbox-icon class="mr-2" size="20" stroke-width="1.5" />
            </template>
          </v-list-item>
        </template>
        <v-list-item active-color="primary" rounded="md" title="Started" value="Started">
          <template #prepend>
            <circle-dot-icon class="mr-2" size="15" stroke-width="1.5" />
          </template>
        </v-list-item>
      </v-list-group>
    </v-card>
  </v-list>
</template>
