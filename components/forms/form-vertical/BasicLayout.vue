<template>
  <v-row>
    <v-col cols="12">
      <v-label class="font-weight-medium mb-2">Name</v-label>
      <v-text-field color="primary" hide-details placeholder="John Deo" type="text" variant="outlined" />
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-medium mb-2">Company</v-label>
      <v-text-field color="primary" hide-details placeholder="ACME Inc." type="text" variant="outlined" />
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-medium mb-2">Email</v-label>
      <v-text-field
        color="primary"
        hide-details
        placeholder="john.deo"
        suffix="@example.com"
        type="email"
        variant="outlined"
      />
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-medium mb-2">Phone No</v-label>
      <v-text-field color="primary" hide-details placeholder="412 2150 451" type="text" variant="outlined" />
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-medium mb-2">Message</v-label>
      <v-textarea
        auto-grow
        color="primary"
        hide-details
        placeholder="Hi, Do you  have a moment to talk Jeo ?"
        row-height="25"
        rows="2"
        shaped
        variant="outlined"
      />
    </v-col>
    <v-col class="" cols="12">
      <v-btn color="primary" flat>Send</v-btn>
    </v-col>
  </v-row>
</template>
