<script setup lang="ts">
import { ref } from 'vue'
const select = ref(['Vuetify', 'Programming'])
const items = ref(['Programming', 'Design', 'Vue', 'Vuetify'])
</script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple Options -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          hide-details
          :items="items"
          label="Select a favorite activity or create a new one"
          multiple
        />
      </v-col>
      <v-col cols="12">
        <v-combobox v-model="select" chips hide-details :items="items" label="I use chips" multiple />
      </v-col>
      <v-col cols="12">
        <v-combobox v-model="select" hide-details :items="items" label="I use a scoped slot" multiple>
          <template #selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :disabled="data.disabled"
              :model-value="data.selected"
              size="small"
              @click:close="data.parent.selectItem(data.item)"
            >
              <template #prepend>
                <v-avatar class="bg-primary text-uppercase" start>{{ data.item.title.slice(0, 1) }}</v-avatar>
              </template>
              {{ data.item.title }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox v-model="select" chips hide-details label="I'm readonly" multiple readonly />
      </v-col>
    </v-row>
  </div>
</template>
