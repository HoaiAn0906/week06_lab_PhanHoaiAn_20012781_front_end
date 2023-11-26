<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { uniqueId } from 'lodash'
import { useNoteStore } from '@/stores/apps/notes'
import { colorVariation } from '@/_mockApis/apps/notes/index'

// common components
const dialog = ref(false)
const title = ref('')
const color = ref('primary')
const store = useNoteStore()

onMounted(() => {
  store.fetchNotes()
})

const getNote = computed(() => {
  return store.notes
})

function colorset(btcolor: any) {
  return (color.value = btcolor)
}
const getId = getNote.value.length
function addNote() {
  return (
    getNote.value.push({ id: getId + 1, title: title.value, color: color.value, datef: new Date() }),
    (dialog.value = false),
    (title.value = '')
  )
}
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->

  <v-sheet>
    <v-btn color="primary" @click="dialog = true">Add Notes</v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-text>
          <h4 class="text-h6 mb-4">Add Notes</h4>
          <v-textarea v-model="title" name="Note" outlined />
          <h4 class="text-h6 mt-4 mb-4">Select Notes Color</h4>
          <div class="d-flex gap-3 align-center">
            <v-btn
              v-for="btcolor in colorVariation"
              :key="btcolor.id"
              :color="btcolor.color"
              icon
              size="x-small"
              @click="colorset(btcolor.color)"
            >
              <CheckIcon v-if="color === btcolor.color" width="16" />
            </v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="addNote">Save</v-btn>
          <v-btn color="primary" @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
