<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { TrashIcon } from 'vue-tabler-icons'
import { useNoteStore } from '@/stores/apps/notes'

const store = useNoteStore()

onMounted(() => {
  store.fetchNotes()
})

const getNotes = computed(() => {
  return store.notes
})

const NoteItem = getNotes

const searchValue = ref('')
const filteredNotes = computed(() => {
  return NoteItem.value.filter((note) => {
    return note.title?.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->
  <div class="pa-6">
    <h4 class="text-h6 mb-4">All Notes</h4>

    <div class="mb-5">
      <v-text-field
        v-model="searchValue"
        append-inner-icon="mdi-magnify"
        density="compact"
        hide-details
        placeholder="Search Notes"
        variant="outlined"
      />
    </div>

    <v-sheet
      v-for="note in filteredNotes"
      v-if="filteredNotes.length > 0"
      :key="note.id"
      :class="'note-sheet pa-6 pb-4 rounded-md cursor-pointer mb-4  bg-light' + note.color"
      @click="store.SelectNote(note.id)"
    >
      <h6 :class="'text-h6 text-truncate text-' + note.color">{{ note.title }}</h6>
      <div class="d-flex mt-3 align-center">
        <small class="text-subtitle-2 opacity-25">{{ new Date(note.datef).toLocaleDateString() }}</small>
        <v-btn class="ml-auto" icon size="x-small" variant="text" @click="store.deleteNote(note.id)">
          <v-tooltip activator="parent" location="top">Delete Note</v-tooltip>
          <trash-icon size="18" />
        </v-btn>
      </div>
    </v-sheet>
    <v-sheet v-if="filteredNotes.length === 0">
      <v-alert text="The Notes you are looking for is not found" title="Opps" type="error" />
    </v-sheet>
  </div>
</template>
<style lang="scss">
.note-sheet {
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
