<script setup lang="ts">
import { ref } from 'vue'
import { Form } from 'vee-validate'
const email = ref('')
const rules = ref({
  required: (value: any) => !!value || 'Required.',
  counter: (value: any) => value.length <= 20 || 'Max 20 characters',
  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
  firstname: (value: any) => value.length > 2 || 'More than two letters required',
  lastname: (value: any) => value.length > 2 || 'More than two letters required',
})

const password = ref('')

const pwdrules = ref({
  required: (value: any) => !!value || 'Required.',
  min: (v: any) => v.length >= 8 || 'Min 8 characters',
  emailMatch: () => "The email and password you entered don't match",
})
</script>
<template>
  <form>
    <v-row>
      <v-col cols="12">
        <v-label class="mb-2 font-weight-medium">Email</v-label>
        <v-text-field v-model="email" hide-details="auto" :rules="[rules.required, rules.email]" variant="outlined" />
      </v-col>
      <v-col cols="12">
        <v-label class="mb-2 font-weight-medium">Password</v-label>
        <v-text-field
          v-model="password"
          color="primary"
          hide-details="auto"
          hint="At least 8 characters"
          :rules="[pwdrules.required, pwdrules.min]"
          type="password"
          variant="outlined"
        />
      </v-col>
      <v-col cols="12">
        <div class="d-flex justify-sm-end">
          <v-btn class="submit-btn mt-2" color="primary" flat type="submit">Submit</v-btn>
        </div>
      </v-col>
    </v-row>
  </form>
</template>
