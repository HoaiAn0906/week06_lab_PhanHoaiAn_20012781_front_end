<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Twitter</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field
            color="primary"
            hide-details
            placeholder="https://twitter.com/abc"
            type="text"
            variant="outlined"
          />
        </v-col>
      </v-row>
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Google</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field
            color="primary"
            hide-details
            placeholder="https://plus.google.com/abc"
            type="text"
            variant="outlined"
          />
        </v-col>
      </v-row>
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Instagram</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field
            color="primary"
            hide-details
            placeholder="https://instagram.com/abc"
            type="text"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Facebook</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field
            color="primary"
            hide-details
            placeholder="https://facebook.com/abc"
            type="text"
            variant="outlined"
          />
        </v-col>
      </v-row>
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Linkedin</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field
            color="primary"
            hide-details
            placeholder="https://Linkedin.com/abc"
            type="text"
            variant="outlined"
          />
        </v-col>
      </v-row>
      <v-row class="align-center mb-3">
        <v-col class="pb-sm-3 pb-0" cols="12" sm="3">
          <v-label class="font-weight-medium">Quora</v-label>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field
            color="primary"
            hide-details
            placeholder="https://Quora.com/abc"
            type="text"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col class="mt-n6" cols="12" md="6">
      <v-row class="align-center">
        <v-col cols="12" offset-sm="3" sm="9">
          <v-btn color="primary" flat>Submit</v-btn>
          <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
