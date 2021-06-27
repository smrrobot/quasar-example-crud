<template>
  <q-page padding>
    <!-- content -->
    <!-- <q-markup-table flat dense>
      <thead>
        <tr class="text-left">
          <th>ID</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in getProducts" :key="index">
          <td>0</td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>
            <q-btn icon="edit" round color="blue" size="sm" @click="editProduct(product)"></q-btn>
            <q-btn icon="delete" round color="red" size="sm" @click="deleteConfirmation(product)"></q-btn>
            <q-btn icon="edit" round color="blue" size="sm"></q-btn>
            <q-btn icon="delete" round color="red" size="sm"></q-btn>
          </td>
        </tr>
      </tbody>
    </q-markup-table> -->
    <div >
      <q-table
        flat
        virtual-scroll
        title=""
        :rows="row"
        :columns="columns"
        row-key="name"
      />
<!-- TODO: show action buttons -->
            <q-td >
              <q-btn dense round flat color="grey"  icon="edit"></q-btn>
              <q-btn dense round flat color="grey"  icon="delete"></q-btn>
            </q-td>

    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'ID',
    required: true,
    label: 'ID',
    align: 'start',
    field: row => row.id,
    format: val => `${val}`,
    // sortable: true
  },
  {
    name: 'productName',
    required: true,
    label: 'Product Name',
    align: 'center',
    field: 'name',
    // sortable: true
  },
  { name: 'description', align: 'center', label: 'Description', field: 'description'},
  { name: 'price', align: 'center', label: 'Price', field: 'price' },
  { name: 'action', align: 'center', label: 'Action', field: ''},
]
// const rows = [
//   {
//     name: getProducts.description,
//     // description: 159,
//     // price: 50,
//     // action: '',
//   }
// ]


import { mapGetters } from 'vuex';
export default {
  // name: 'PageName',
  computed: {
		...mapGetters({
      'getProducts': 'products/GET_PRODUCTS',
    }),
    row() {
      return Object.values(this.getProducts);
    }
	},

  setup() {
    return {
      columns,
      // rows,
    }
  },

}
</script>
