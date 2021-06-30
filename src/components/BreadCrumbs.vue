<template>
  <div class="q-mx-lg q-mt-lg"  >
    <div class="row ">
      <div class="col bread-crumbs-bg">
        <q-breadcrumbs gutter="lg" class="q-pa-sm q-ml-md" separator="/" color="primary">
          <q-breadcrumbs-el to="/" label="Home" />
          <q-breadcrumbs-el to="/products" label="Products"
            v-if="$route.name === 'route-products' || $route.name === 'route-products-form'" />
          <q-breadcrumbs-el to="" label="Form" v-if="$route.name === 'route-products-form'" />
          <q-breadcrumbs-el to="" label='Categories' v-if="$route.path === '/categories'" />
          <q-breadcrumbs-el to="" label='About' v-if="$route.path === '/about'" />
        </q-breadcrumbs>
      </div>
    </div>
  </div>
<!-- q-pa-sm q-ml-md -->
</template>

<script>
export default {
  name: 'BreadCrumbs',
  setup () {
    return {}
  }
}
</script>

<style scoped>
  .bread-crumbs-bg{
    background-color: rgb(238, 237, 237);
    height: 35px;
    border-radius: 8px;
  }
</style>
