<script setup>
import { Form } from 'vee-validate'
import * as Yup from 'yup'
function onSubmit(values) {
  alert(JSON.stringify(values, null, 2))
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector('.submit-btn')
  submitBtn.classList.add('invalid')
  setTimeout(() => {
    submitBtn.classList.remove('invalid')
  }, 1000)
}

// Using yup to generate a validation schema
// https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
})
</script>

<template>
  <div>
    <form :validation-schema="schema" @invalid-submit="onInvalidSubmit">
      <v-row>
        <v-col cols="12">
          <v-label class="mb-2 font-weight-medium">Email</v-label>
          <FormsFormValidationTextInput name="email1" success-message="Got it, we won't spam you!" type="email" />
        </v-col>
        <v-col cols="12">
          <v-label class="mb-2 font-weight-medium">Password</v-label>
          <FormsFormValidationTextInput name="password1" success-message="Nice and secure!" type="password" />
        </v-col>
        <v-col cols="12">
          <div class="d-sm-flex align-center mb-4">
            <v-checkbox color="primary" density="compact" hide-details label="Remember this Device" />
            <div class="ml-auto">
              <a class="text-primary text-decoration-none" href="javascript:void(0)">Forgot password?</a>
            </div>
          </div>
          <v-btn class="submit-btn mt-2" color="primary" flat type="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>
