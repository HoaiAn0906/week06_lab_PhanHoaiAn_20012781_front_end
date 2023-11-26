<script setup lang="ts">
import { ref } from 'vue'
import { XIcon } from 'vue-tabler-icons'
const dialog = ref(false)
const notifications = ref(false)
const sound = ref(true)
const widgets = ref(false)
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <template #activator="{ props }">
        <v-btn class="w-100" color="error" dark v-bind="props" flat>Open Fullscreen Dialog</v-btn>
      </template>
      <v-card>
        <v-toolbar color="primary" dark style="flex: unset">
          <v-btn color="inherit" flat icon @click="dialog = false">
            <x-icon width="20" />
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn dark flat text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-item>
          <v-list lines="two" subheader>
            User Controls
            <v-list-item
              subtitle="Set the content filtering level to restrict apps that can be downloaded"
              title="Content filtering"
            />
            <v-list-item
              subtitle="Require password for purchase or use password to restrict purchase"
              title="Password"
            />
          </v-list>
          <v-divider />
          <v-list lines="two" subheader>
            General
            <v-list-item subtitle="Notify me about updates to apps or games that I downloaded" title="Notifications">
              <template #prepend>
                <v-checkbox v-model="notifications" />
              </template>
            </v-list-item>
            <v-list-item subtitle="Auto-update apps at any time. Data charges may apply" title="Sound">
              <template #prepend>
                <v-checkbox v-model="sound" />
              </template>
            </v-list-item>
            <v-list-item subtitle="Automatically add home screen widgets" title="Auto-add widgets">
              <template #prepend>
                <v-checkbox v-model="widgets" />
              </template>
            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>
