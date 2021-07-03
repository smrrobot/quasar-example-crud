<template>
  <q-page>
    <!-- content -->
    <div class="q-mx-lg q-mt-lg">
      <!-- Table -->
      <q-table
      flat
      virtual-scroll
      title=""
      :rows="prodItem"
      :columns="columns"
      row-key="id"
      :pagination="pagination"
      :rows-per-page-options="rowsOptions"
      >
        <template v-slot:body="props">
          <q-tr :props="props">

            <q-td key="category" :props="props">{{ props.row.name }}</q-td>
            <q-td key="actions" :props="props" class="q-gutter-x-xs">
              <!-- Edit Button -->
              <q-btn
                color="blue"
                icon="edit"
                size=sm
                no-caps
                round
                @click="beforeShow(props.row.id, true)"

              >
              <!-- Delete Button -->
              </q-btn>
              <q-btn color="red" icon="delete" @click="deleteConfirmation(props.row.id)" size=sm no-caps round></q-btn>
            </q-td>
          </q-tr>
        </template>


        <!-- Pagination -->
        <template v-slot:pagination="scope">
          <!-- PAGINATION PREVIOUS PAGE -->
          <q-btn
            color="grey-8"
            outline
            rounded
            dense
            padding="5px 15px"
            size="md"
            :disable="scope.isFirstPage"
            @click="scope.prevPage"
          >
            <div class="row items-center no-wrap">
              <q-icon name="west" left size="xs"/>
              <div class="text-center">
                Previous
              </div>
            </div>
          </q-btn>
          <!-- PAGINATION NEXT PAGE -->
          <q-btn
            color="grey-8"
            outline
            rounded
            dense
            padding="5px 30.32px"
            size="md"
            class="q-ml-sm"
            :disable="scope.isLastPage"
            @click="scope.nextPage"
          >
            <div class="row items-center no-wrap">
              <div class="text-center">
                Next
              </div>
              <q-icon name="east" right size="xs"/>
            </div>
          </q-btn>
        </template>

      </q-table>



      <!-- Delete Dialog -->
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="delete" color="red" text-color="white" />
            <span class="q-ml-sm">Are you sure you want to delete this item <b>ID: {{activeForDeletion}}?</b></span>
          </q-card-section>

          <q-card-actions >
            <q-btn flat label="Yes" color="red" v-close-popup @click="deleteProduct"/>
            <q-btn flat label="Cancel" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- EDIT RECORD DIALOG -->
      <q-dialog
        v-model="prompt"
        persistent
        style="height: 200px;"

      >
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Add New Category</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <!-- <q-input dense v-model="address" autofocus @keyup.enter="prompt = false"></q-input> -->
            <CategoryForm :rowID="editVal"/>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
  import { ref } from 'vue'
  import { mapGetters } from 'vuex'
  import CategoryForm from './Category-Form.vue'

  const columns = [
    // {
    //   name: 'id',
    //   required: true,
    //   label: 'ID',
    //   align: 'start',
    //   field: row => row.id,
    //   format: val => `${val}`
    // },
    {
      name: 'category',
      label: 'Category',
      align: 'center',
      field: 'category',
    },
    {
      name: 'actions',
      align: 'center',
      label: 'Actions',
      field: 'actions'
    },
  ]


  export default {
    name: 'Category-Table',
    components: {
      CategoryForm
    },
    data() {
      return {

        confirm: ref(false),
        editVal: null,
        activeForDeletion: null,
        PageTitle: 'Hello World',
        rowsOptions: []
      }
    },

    computed: {
      ...mapGetters({
        'getCategories': 'products/GET_CATEGORIES',
      }),
      prodItem() {
        return Object.values(this.getCategories);
      }
    },
    methods: {
      beforeShow(category, evt) {
        this.prompt = evt
        this.editVal = category
        // console.log(this.editVal)

			},
      deleteItem(item) {
        const index = this.data.indexOf(item);
        // confirm("Are you sure you want to delete this item?") &&
          this.getProducts.splice(index, 1);
      },
      deleteConfirmation(product) {
        this.confirm = true
        this.activeForDeletion = product;
      },
      deleteProduct(){
			  this.$store.dispatch('products/DELETE_CATEGORY', this.activeForDeletion)

      }
    },
    setup() {

      return {

        columns,
        prompt: ref(false),
        address: ref(''),
        pagination: {
          sortBy: 'id',
          descending: true,
          page: 1,
          rowsPerPage: 8
        // rowsNumber: xx if getting data from a server
        }
      }

    },
    watch: {
      // addNewTrigger() {
      //   if($route.name="route-category-form"){
      //     return console.log('na Trigger')
      //   }

      // }

    }


  }

</script>

<style scoped>
  .newButton {
    margin-top: -3.1rem;
  }
  .actionBtn {
    margin-right: 15px;
  }
</style>
