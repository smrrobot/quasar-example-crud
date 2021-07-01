<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          SMF
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-secondary"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

      </q-list>
    </q-drawer>

    <q-page-container>

      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import BreadCrumbs from 'components/BreadCrumbs.vue'

const linksList = [
  {
    title: 'Products',
    // caption: 'quasar.dev',
    icon: 'inventory_2',
    link: 'route-products'
  },{
    title: 'Categories',
    // caption: 'quasar.dev',
    icon: 'category',
    link: 'route-categories'
  },{
    title: 'About',
    // caption: 'quasar.dev',
    icon: 'info',
    link: 'route-about'
  },

];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      bread:''
    }
  },

  components: {
    EssentialLink,
    BreadCrumbs
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
