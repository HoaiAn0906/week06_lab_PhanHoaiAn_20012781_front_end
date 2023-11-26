<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { CheckIcon, Menu2Icon } from 'vue-tabler-icons'
import AddNote from './AddNote.vue'
import { useNoteStore } from '@/stores/apps/notes'
import { colorVariation } from '@/_mockApis/apps/notes/index'

const store = useNoteStore()

onMounted(() => {
  store.fetchNotes()
})

const getNote = computed(() => {
  return store.notes[store.notesContent - 1]
})
// theme breadcrumb
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->

  <v-sheet>
    <v-sheet class="py-3 pl-6 pr-4 d-flex align-center">
      <h4 class="text-h6">Edit Notes</h4>
      <div class="ml-auto"><add-note /></div>
    </v-sheet>
    <v-divider />
    <v-sheet v-if="getNote">
      <v-sheet class="pa-6">
        <h4 class="text-h6 mb-4">Change Title</h4>
        <v-textarea v-model="getNote.title" name="Note" outlined />

        <h4 class="text-h6 mt-4 mb-4">Change Notes Color</h4>
        <div class="d-flex gap-3 align-center">
          <v-btn
            v-for="btcolor in colorVariation"
            :key="btcolor.id"
            :color="btcolor.color"
            icon
            size="x-small"
            @click="store.updateNote(getNote.id, btcolor.color)"
          >
            <check-icon v-if="getNote.color === btcolor.color" width="16" />
          </v-btn>
        </div>
      </v-sheet>
    </v-sheet>
    <v-sheet v-else class="pa-6">
      <v-alert text="No Note selected Please select note" title="Opps" type="error" />
    </v-sheet>
  </v-sheet>
</template>
