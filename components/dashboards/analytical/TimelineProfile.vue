<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col class="border-right" cols="12" lg="3" sm="3">
          <strong class="text-subtitle-1 font-weight-medium">Full Name</strong>
          <br />
          <p class="text-muted">Johnathan Deo</p>
        </v-col>
        <v-col class="border-right" cols="12" lg="3" sm="3">
          <strong class="text-subtitle-1 font-weight-medium">Mobile</strong>
          <br />
          <p class="text-muted">(123) 456 7890</p>
        </v-col>
        <v-col class="border-right" cols="12" lg="3" sm="3">
          <strong class="text-subtitle-1 font-weight-medium">Email</strong>
          <br />
          <p class="text-muted w-100 text-truncate">johnathan@admin.com</p>
        </v-col>
        <v-col cols="12" lg="3" sm="3">
          <strong class="text-subtitle-1 font-weight-medium">Location</strong>
          <br />
          <p class="text-muted">London</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <p class="mt-4 border-top pt-4">
    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
    venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus
    elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
    ac, enim.
  </p>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries
  </p>
  <p>
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <div class="mt-4">
    <h3 class="text-h6">Skill Set</h3>
    <div class="border-top mt-5">
      <h5 class="mt-4 mb-0 text-subtitle-1">
        Wordpress
        <span class="float-right">80%</span>
      </h5>
      <v-progress-linear v-model="valueDeterminate" class="mt-2" color="success" />
      <h5 class="mt-4 mb-0 text-subtitle-1">
        HTML 5
        <span class="float-right">90%</span>
      </h5>
      <v-progress-linear v-model="valueDeterminate2" class="mt-2" color="warning" />
      <h5 class="mt-4 mb-0 text-subtitle-1">
        jQuery
        <span class="float-right">50%</span>
      </h5>
      <v-progress-linear v-model="valueDeterminate3" class="mt-2" color="error" />
      <h5 class="mt-4 mb-0 text-subtitle-1">
        Photoshop
        <span class="float-right">70%</span>
        <v-progress-linear v-model="valueDeterminate4" class="mt-2" color="info" />
      </h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const valueDeterminate = ref(80)
const valueDeterminate2 = ref(90)
const valueDeterminate3 = ref(50)
const valueDeterminate4 = ref(70)
</script>
