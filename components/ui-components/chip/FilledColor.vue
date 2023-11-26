<script setup lang="ts">
import { ref } from 'vue'
import { MoodSmileIcon, CircleXIcon } from 'vue-tabler-icons'
</script>
<template>
  <div class="d-flex flex-wrap align-center gap-3">
    <v-chip class="text-body-2">
      <mood-smile-icon class="mr-2" size="20" start />
      Default Filled
    </v-chip>
    <v-chip class="text-body-2">
      <mood-smile-icon class="mr-2" size="20" start />
      Default Deletable
      <circle-x-icon class="ml-2" size="20" start />
    </v-chip>
    <v-chip class="text-body-2" color="primary">
      <v-avatar size="25" start>
        <img src="/images/profile/user-1.jpg" width="25" />
      </v-avatar>
      Primary Filled
    </v-chip>
    <v-chip class="text-body-2" color="primary">
      <v-avatar size="25" start>
        <img src="/images/profile/user-1.jpg" width="25" />
      </v-avatar>
      Primary Deletable
      <circle-x-icon class="ml-2" size="20" start />
    </v-chip>
    <v-chip class="text-body-2" color="secondary">
      <mood-smile-icon class="mr-2" size="20" start />
      Secondary Filled
    </v-chip>
    <v-chip class="text-body-2" color="secondary">
      <mood-smile-icon class="mr-2" size="20" start />
      Secondary Deletable
      <circle-x-icon class="ml-2" size="20" start />
    </v-chip>
    <v-chip class="text-body-2" color="success">
      <v-avatar size="25" start>
        <img src="/images/profile/user-2.jpg" width="25" />
      </v-avatar>
      Default Filled
    </v-chip>
    <v-chip class="text-body-2" color="success">
      <v-avatar size="25" start>
        <img src="/images/profile/user-2.jpg" width="25" />
      </v-avatar>
      Default Deletable
      <circle-x-icon class="ml-2" size="20" start />
    </v-chip>
    <v-chip class="text-body-2" color="warning">
      <mood-smile-icon class="mr-2" size="20" start />
      Default Filled
    </v-chip>
    <v-chip class="text-body-2" color="warning">
      <mood-smile-icon class="mr-2" size="20" start />
      Default Deletable
      <circle-x-icon class="ml-2" size="20" start />
    </v-chip>
    <v-chip class="text-body-2" color="error">
      <v-avatar size="25" start>
        <img src="/images/profile/user-5.jpg" width="25" />
      </v-avatar>
      Default Filled
    </v-chip>
    <v-chip class="text-body-2" color="error">
      <v-avatar size="25" start>
        <img src="/images/profile/user-5.jpg" width="25" />
      </v-avatar>
      Default Deletable
      <circle-x-icon class="ml-2" size="20" start />
    </v-chip>
  </div>
</template>
