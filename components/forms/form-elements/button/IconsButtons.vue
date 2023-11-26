<script setup lang="ts"></script>
<template>
  <div class="d-flex gap-3 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
    <v-btn color="error" flat variant="outlined">
      <TrashIcon class="mr-2" size="18" stroke-width="1.5" />
      left icon
    </v-btn>
    <v-btn color="secondary" flat variant="outlined">
      right icon
      <SendIcon class="ml-2" size="18" stroke-width="1.5" />
    </v-btn>
  </div>
</template>
