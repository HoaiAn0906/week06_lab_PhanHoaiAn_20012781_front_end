<script setup lang="ts">
import { ref } from 'vue'
const tab7 = ref(null)
</script>
<template>
  <v-row class="d-flex flex-row">
    <v-col cols="12" sm="3">
      <v-tabs v-model="tab7" color="primary" direction="vertical">
        <v-tab class="mb-3 text-left" height="70" rounded="md" value="option-1">
          <UserIcon class="v-icon--start" stroke-width="1.5" width="20" />
          <div>
            <div>User Profile</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Profile Settings
            </span>
          </div>
        </v-tab>
        <v-tab class="mb-3 text-left" height="70" rounded="md" value="option-2">
          <FileDescriptionIcon class="v-icon--start" stroke-width="1.5" width="20" />
          <div>
            <div>Billing</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Billing Information
            </span>
          </div>
        </v-tab>
        <v-tab class="mb-3 text-left" height="70" rounded="md" value="option-3">
          <CreditCardIcon class="v-icon--start" stroke-width="1.5" width="20" />
          <div>
            <div>Payment</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Add & Update Card
            </span>
          </div>
        </v-tab>
        <v-tab class="mb-3 text-left" height="70" rounded="md" value="option-4">
          <KeyIcon class="v-icon--start" stroke-width="1.5" width="20" />
          <div>
            <div>Change Password</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Update Profile Security
            </span>
          </div>
        </v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="12" sm="9">
      <v-window v-model="tab7" class="bg-lightprimary">
        <v-window-item value="option-1">
          <v-card variant="outlined">
            <v-card-text>
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>

              <p class="mt-4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card variant="outlined">
            <v-card-text>
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>

              <p class="mt-4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card variant="outlined">
            <v-card-text>
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>

              <p class="mt-4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-4">
          <v-card variant="outlined">
            <v-card-text>
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>

              <p class="mt-4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>
