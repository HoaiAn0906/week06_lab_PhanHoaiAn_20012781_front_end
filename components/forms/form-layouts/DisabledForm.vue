<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-label class="mb-2 font-weight-medium">Name</v-label>
      <v-text-field color="primary" disabled variant="outlined" />
      <v-label class="mb-2 font-weight-medium">Email</v-label>
      <v-text-field
        color="primary"
        disabled
        hint="We'll never share your email with anyone else."
        persistent-hint
        placeholder="Enter email"
        variant="outlined"
      />
      <v-label class="mb-2 font-weight-medium mt-5">Password</v-label>
      <v-text-field
        color="primary"
        disabled
        hide-details
        persistent-hint
        placeholder="Enter password"
        type="password"
        variant="outlined"
      />
      <v-btn class="mt-6" color="primary" disabled flat>Submit</v-btn>
    </v-col>
  </v-row>
</template>
