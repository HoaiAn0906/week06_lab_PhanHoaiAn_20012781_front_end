<script setup lang="ts">
import { RouterView } from 'vue-router'
import { pl, zhHans } from 'vuetify/locale'
import { useCustomizerStore } from '@/stores/customizer'
const customizer = useCustomizerStore()
const title = ref('AdminPro - Nuxt3 Typescript based Admin Dashboard Template')
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Admin Dashboard Template`
      : 'AdminPro - Nuxt3 Typescript based Admin Dashboard Template'
  },
})
</script>

<template>
  <v-locale-provider>
    <v-app
      :class="[
        customizer.actTheme,
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
        customizer.setBorderCard ? 'cardBordered' : '',
      ]"
      :theme="customizer.actTheme"
    >
      <LcFullCustomizer />
      <LcFullHorizontalHeader v-if="customizer.setHorizontalLayout" />
      <LcFullHorizontalSidebar v-if="customizer.setHorizontalLayout" />
      <v-main>
        <v-container class="page-wrapper pb-sm-15 pb-10" fluid>
          <div :class="customizer.boxed ? 'maxWidth' : ''">
            <router-view />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
