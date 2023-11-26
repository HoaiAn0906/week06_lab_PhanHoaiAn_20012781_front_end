<script setup lang="ts">
import { ref } from 'vue'
import { notificationTb } from '@/_mockApis/components/pages/accountNotification'
const switchoff3 = ref(false)
</script>
<template>
  <v-row class="justify-center ma-n2">
    <!----Notification Preferences----->
    <v-col cols="12" md="9">
      <v-card elevation="10">
        <v-card-item>
          <h4 class="text-h4">Notification Preferences</h4>
          <div class="text-subtitle-1 text-medium-emphasis text-10 my-3">
            Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving
            service messages, such as payment, security or legal notifications.
          </div>
          <div class="mt-6">
            <v-label class="mb-2 font-weight-medium">Email Address*</v-label>
            <v-text-field color="primary" hide-details type="email" variant="outlined" />
            <span class="text-subtitle-1 text-medium-emphasis">Required for notificaitons.</span>
          </div>

          <div v-for="list in notificationTb" :key="list.title" class="d-flex align-sm-center align-start mt-7">
            <v-avatar class="mr-2" color="lightprimary" rounded="md" size="48">
              <component :is="list.icon" size="22" stroke-width="2" />
            </v-avatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">{{ list.title }}</h6>
              <h5 class="text-subtitle-1 text-medium-emphasis">{{ list.subtitle }}</h5>
            </div>
            <div class="ml-auto mr-1 pa-sm-0 pa-6">
              <v-switch color="primary" hide-details :model-value="list.switch" />
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
    <!-----Date & Time------->
    <v-col cols="12" md="9">
      <v-card elevation="10">
        <v-card-item>
          <v-card-title class="text-h4">Date & Time</v-card-title>
          <div class="text-subtitle-1 text-medium-emphasis text-10 my-3">Time zones and calendar display settings.</div>
          <div>
            <div class="d-flex align-center mt-7">
              <v-avatar class="mr-2" color="lightprimary" rounded="md" size="48">
                <ClockIcon size="22" />
              </v-avatar>
              <div class="pl-4">
                <h5 class="text-subtitle-1 text-medium-emphasis mb-1">Time zone</h5>
                <h6 class="text-h6">(UTC + 02:00) Athens, Bucharet</h6>
              </div>
              <div class="ml-auto">
                <v-btn class="lightprimary d-flex" icon size="30" variant="flat">
                  <v-avatar size="30">
                    <DownloadIcon size="22" />
                  </v-avatar>
                  <v-tooltip activator="parent" location="bottom">Download</v-tooltip>
                </v-btn>
              </div>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
    <!-----Ignore Tracking------->
    <v-col cols="12" md="9">
      <v-card elevation="10">
        <v-card-item>
          <v-card-title class="text-h4">Ignore Tracking</v-card-title>
          <div>
            <div class="d-flex align-center mt-7">
              <v-avatar class="mr-2" color="lightprimary" rounded="md" size="48">
                <PlayerPauseIcon size="22" />
              </v-avatar>
              <div class="pl-4">
                <h6 class="text-h6 mb-3 mt-n1">Ignore Browser Tracking</h6>
                <h5 class="text-subtitle-1 text-medium-emphasis">Browser Cookie</h5>
              </div>
              <div class="ml-auto mr-1">
                <v-switch v-model="switchoff3" color="primary" hide-details />
              </div>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <div class="d-flex justify-end mt-5">
    <v-btn class="mr-4" color="primary" flat size="large">Save</v-btn>
    <v-btn class="bg-lighterror text-error" flat size="large">Cancel</v-btn>
  </div>
</template>
