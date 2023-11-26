<script setup>
import Icon from '../Icon.vue'

const props = defineProps({ item: Object, level: Number })
</script>

<template>
  <!---Single Item-->
  <v-list-item
    v-scroll-to="{ el: '#top' }"
    class="mb-1"
    :disabled="item.disabled"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    :target="item.type === 'external' ? '_blank' : ''"
    :to="item.type === 'external' ? '' : item.to"
  >
    <!---If icon-->
    <template #prepend>
      <icon :item="item.icon" :level="level" />
    </template>
    <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <!---If any chip or label-->
    <template v-if="item.chip" #append>
      <v-chip
        :class="'sidebarchip hide-menu bg-' + item.chipBgColor"
        :color="item.chipColor"
        :prepend-icon="item.chipIcon"
        :size="item.chipIcon ? 'small' : 'small'"
        :variant="item.chipVariant"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
