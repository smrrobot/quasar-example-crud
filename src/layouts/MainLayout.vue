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
      class="bg-grey-1"
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
    <q-breadcrumbs gutter="md" class="q-pa-md" separator=">" color="primary">
        <q-breadcrumbs-el
          to="/"
          label="Home"
        />
        <q-breadcrumbs-el
          to="/products"
          label="Products"
          v-if="$route.path === '/products' || $route.path === '/products/form/:id'"
        />
        <q-breadcrumbs-el
          to=""
          label="Form"
          v-if="$route.path === '/products/form/:id'"
        />
        <q-breadcrumbs-el
          to=""
          label='Categories'
          v-if="$route.path === '/categories'"
        />
        <q-breadcrumbs-el
          to=""
          label='About'
          v-if="$route.path === '/about'"
        />

        <!-- <q-breadcrumbs-el
          v-if="$route.path == '/product/form'"
          label='Form'
        /> -->


      </q-breadcrumbs>
      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Products',
    // caption: 'quasar.dev',
    icon: 'school',
    link: 'route-products'
  },{
    title: 'Categories',
    // caption: 'quasar.dev',
    icon: 'school',
    link: 'route-categories'
  },{
    title: 'About',
    // caption: 'quasar.dev',
    icon: 'school',
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
    EssentialLink
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
