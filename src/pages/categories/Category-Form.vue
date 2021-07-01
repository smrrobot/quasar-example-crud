<template>
  <q-page class="col q-pl-lg q-pr-lg">


    <q-form class="" ref="form-products">
      <div class="row q-mt-xl">
        <div class="col-lg-5 col-xs-12 q-mr-xl">
          <span class="text-subtitle1">Product Name *</span>
          <q-input :rules="rules.name" outlined v-model="product.name" lazy-rules dense/>
        </div>
        <div class="col-lg-5 col-xs-12">
          <span class="text-subtitle1 ">Category</span>
          <q-input outlined v-model="product.category" lazy-rules dense/>
        </div>
      </div>
      <div class="row q-mt-md">
        <div class="col-12 ">
          <span class="text-subtitle1">Description</span>
          <q-input :rules="rules.description" outlined v-model="product.description"  lazy-rules dense type="textarea" />
        </div>
      </div>
      <div class="row q-mt-md">
        <div class="col-5 ">
          <span class="text-subtitle1">Price</span>
          <q-input outlined v-model="product.price" lazy-rules type="number" dense/>
        </div>
      </div>
      <div class="row self-end justify-end q-mt-xl">
        <div class="col-2" style="margin-top: 4%;">
          <q-btn label="Save" color="positive" class="float-right" padding="sm xl" @click="submitForm"/>
        </div>
      </div>
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
			...mapGetters({'getProducts': 'products/GET_PRODUCTS'})
    },

    data() {
      return {
        product: {
          id: null,
          name: null,
          category: null,
          price: null,
          description: null,
        },
        rules: {
				  name: [val => !!val || 'Field is required'],
          description: [val => !!val || 'Field is required']
        },


      }
    },
    methods: {
      submitForm() {
        this.$refs['form-products'].validate().then(isValid => {
          if (isValid) {
            console.log(isValid)

            /* Call an Action */
            let product = this.product;


            if (product.id) {
              this.newProd('Success! Product has been updated.','green','task_alt')
              this.$store.dispatch('products/UPDATE_PRODUCT', product)
              this.$router.push({ name: 'route-products' })
            } else {
              /* New */
              // TODO: product ID
              this.product.id = this.getProducts.length +1
              this.$store.dispatch('products/SAVE_PRODUCT', product)
              this.newProd('Success! Product has been added.','green','task_alt')
              this.$router.push({ name: 'route-products' })
              console.log(product)
            }
          }
          else {
            /* Form is invalid*/
            this.newProd('Field input required.','red','error_outline')
          }
        })
      }
    },
    // TODO: Setup for notification
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
