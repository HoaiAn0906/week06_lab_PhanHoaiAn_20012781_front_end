<script setup>
const props = defineProps({ item: Object, level: Number })
</script>

<template>
  <template v-if="level > 0">
    <component :is="item" class="iconClass" size="14" stroke-width="1.5" />
  </template>
  <template v-else>
    <component :is="item" class="iconClass" size="20" stroke-width="1.5" />
  </template>
</template>
