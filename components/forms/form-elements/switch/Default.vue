<template>
  <div class="d-flex justify-center">
    <div class="d-flex gap-4 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
      <v-switch color="primary" hide-details :model-value="true" />
      <v-switch color="primary" hide-details :model-value="false" />
      <v-switch color="primary" disabled hide-details :model-value="true" />
      <v-switch color="primary" disabled hide-details :model-value="false" />
    </div>
  </div>
</template>
