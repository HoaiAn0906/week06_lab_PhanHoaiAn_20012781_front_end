<template>
  <div class="d-sm-flex">
    <v-switch color="primary" hide-details :model-value="true" />

    <v-switch color="primary" hide-details :model-value="false" />
    <v-switch color="primary" disabled hide-details :model-value="true" />

    <v-switch color="primary" disabled hide-details :model-value="false" />
    <v-switch hide-details loading="error" :model-value="true" />

    <v-switch hide-details loading="error" :model-value="false" />
  </div>
</template>
