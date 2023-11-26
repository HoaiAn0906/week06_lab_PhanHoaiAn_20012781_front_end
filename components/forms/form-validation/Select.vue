<script setup lang="ts">
import { computed, ref } from 'vue'
const defaultForm = Object.freeze({
  age: '',
})
const form = ref(Object.assign({}, defaultForm))
const rules = ref({
  age: [(val: any) => (val || '').length > 0 || 'This field is required'],
})
const age = ref(['Ten', 'Twenty', 'Thirty'])
// const conditions = ref(false);
// const formIsValid = computed(() => {
//   return (
//     form.value.age
//   );
// });
function submitForm() {
  form.value = Object.assign({}, defaultForm)
}
</script>
<template>
  <v-form ref="form">
    <v-label class="mb-2 font-weight-medium">Age</v-label>
    <v-select v-model="form.age" color="primary" :items="age" required :rules="rules.age" variant="outlined" />
    <v-btn class="mt-3" color="primary" flat @click="submitForm">submit</v-btn>
  </v-form>
</template>
