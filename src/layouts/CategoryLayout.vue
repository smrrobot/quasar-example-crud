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
            label="New"
            size=".8rem"
            class="float-right q-mr-lg"
            padding="sm xl"
            @click="prompt = true"
          />

        </div>
      </div>
      <BreadCrumbs/>
      <router-view />

      <!-- ADD NEW RECORD DIALOG -->
      <q-dialog v-model="prompt" persistent style="height: 200px; ">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Add New Category</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <!-- <q-input dense v-model="address" autofocus @keyup.enter="prompt = false"></q-input> -->
            <CategoryForm/>
          </q-card-section>
        </q-card>
      </q-dialog>

    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue';
import BreadCrumbs from 'components/BreadCrumbs.vue';
import CategoryForm from 'pages/categories/Category-Form.vue';

export default {
  // name: 'LayoutName',
  components: {
    BreadCrumbs,
    CategoryForm
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

    // buttonProduct(){

    //   if(this.$route.name === 'route-categories'){
    //     this.navRoute.togo = '/categories/form/'
    //     return this.navRoute.label = 'New'
    //   }else if(this.$route.name === 'route-category-form'){
    //     this.navRoute.togo = '/categories'
    //     return this.label = 'Back'
    //   }
    // }
  },
  setup() {
    return {
      prompt: ref(false),
      address: ref(''),
    }

  },

}
</script>

<style scoped>

</style>
