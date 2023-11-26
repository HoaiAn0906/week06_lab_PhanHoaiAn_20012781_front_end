<template>
  <v-row>
    <v-col cols="12" md="6">
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Twitter</v-label>
        <v-text-field
          color="primary"
          hide-details
          placeholder="https://twitter.com/abc"
          type="text"
          variant="outlined"
        />
      </div>
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Google</v-label>
        <v-text-field
          color="primary"
          hide-details
          placeholder="https://plus.google.com/abc"
          type="text"
          variant="outlined"
        />
      </div>
      <div>
        <v-label class="font-weight-medium mb-2">Instagram</v-label>
        <v-text-field
          color="primary"
          hide-details
          placeholder="https://instagram.com/abc"
          type="text"
          variant="outlined"
        />
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Facebook</v-label>
        <v-text-field
          color="primary"
          hide-details
          placeholder="https://facebook.com/abc"
          type="text"
          variant="outlined"
        />
      </div>
      <div class="mb-6">
        <v-label class="font-weight-medium mb-2">Linkedin</v-label>
        <v-text-field
          color="primary"
          hide-details
          placeholder="https://Linkedin.com/abc"
          type="text"
          variant="outlined"
        />
      </div>
      <div>
        <v-label class="font-weight-medium mb-2">Quora</v-label>
        <v-text-field color="primary" hide-details placeholder="https://Quora.com/abc" type="text" variant="outlined" />
      </div>
    </v-col>
    <v-col cols="12">
      <v-btn color="primary" flat>Submit</v-btn>
      <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
    </v-col>
  </v-row>
</template>
