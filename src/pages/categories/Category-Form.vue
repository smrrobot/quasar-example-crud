<template>
  <q-page style="min-height: 0px;">
    <q-form class="" ref="form-products">
          <span class="text-subtitle1">Category Name *</span>
          <q-input :rules="rules.name" outlined v-model="category.name" lazy-rules dense/>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup></q-btn>
        <q-btn flat label="Submit" @click="submitForm" v-close-popup></q-btn>
      </q-card-actions>
    </q-form>
  </q-page>
</template>

<script>
  import {mapGetters} from 'vuex'
  import { useQuasar } from 'quasar'
  export default {
    name: 'Product-Form',
    beforeMount(){
      let productId = this.$route.params.id;
			console.log(productId);
      if(productId){

        let product = this.getProducts.filter(p => p.id === Number(productId));

        if(product.length){
          this.product.id = product[0].id;
					this.product.name = product[0].name;
					this.product.description = product[0].description;
          this.product.price = product[0].price;
          this.product.category = product[0].category;
        }
      }
    },
    computed: {
			...mapGetters({'getProducts': 'products/GET_CATEGORIES'})
    },

    data() {
      return {
        category: {
          id: null,
          name: null,
        },
        rules: {
				  name: [val => !!val || 'Field is required'],
        },


      }
    },
    methods: {
      submitForm() {
        this.$refs['form-products'].validate().then(isValid => {
          if (isValid) {

            /* Call an Action */
            let category = this.category;


            if (!category.name) {
              this.newProd('Success! Product has been updated.','green','task_alt')
              this.$store.dispatch('products/UPDATE_CATEGORY', category)
              // this.$router.push({ name: 'route-categories' })
            } else {
              /* New */

              this.category.id = this.getProducts.length +1
              this.$store.dispatch('products/SAVE_CATEGORY', category)
              this.newProd('Success! Category has been added.','green','task_alt')

              // this.$router.push({ name: 'route-products' })
            }
          }
          else {
            /* Form is invalid*/
            this.newProd('Field input required.','red','error_outline')
          }
        })
      }
    },

    setup() {
      const $q = useQuasar()
      return {
        newProd(message,color,icon) {
          $q.notify({
            icon,
            message,
            color,
            position: 'bottom-left',
            classes: 'form-alert',
            timeout: '1500'
          })
        }

      }
    }
  }
</script>

<style>
  .form-alert{
    padding-right: 50px;
  }
  .q-notifications__list--bottom{
    bottom: 50px !important;
  }
  .q-notifications__list{
    left: 5% !important;
  }
</style>
