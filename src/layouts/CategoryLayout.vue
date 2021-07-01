<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-page-container>
      <!-- This is where pages get injected -->
      <div class="row q-mt-lg">

        <div class="col-6 ">
          <span class="text-h5 q-ml-lg">
            {{ $route.meta.title }}
          </span>
        </div>

        <div class="col-6">
          <q-btn
            color="positive"
            :label="buttonProduct"
            size=".8rem"
            :to="navRoute.togo"
            class="float-right q-mr-lg"
            padding="sm xl"
          />

        </div>
      </div>
      <BreadCrumbs/>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import BreadCrumbs from 'components/BreadCrumbs.vue'
export default {
  // name: 'LayoutName',
  components: {
    BreadCrumbs
  },
  data() {
    return {
      navRoute: {
        label: '',
        togo: ''
      }
    }
  },
  computed: {

    buttonProduct(){

      if(this.$route.name === 'route-categories'){
        this.navRoute.togo = '/categories/form/'
        return this.navRoute.label = 'New'
      }else if(this.$route.name === 'route-category-form'){
        this.navRoute.togo = '/categories'
        return this.label = 'Back'
      }
    }
  },

}
</script>

<style scoped>

</style>
