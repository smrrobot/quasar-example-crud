
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: '',
        path: 'products',
        component: () => import('layouts/ProductLayout'),
        children: [
          {
            name: 'route-products',
            path: '',
            component: () => import('pages/products/Product-Table'),
            meta: {
              title: 'Product List'
            }
          },
          {
            name: 'route-products-form',
            path: 'form/:id?',
            component: () => import('pages/products/Product-Form'),
            meta: {
              title: 'Product Form'
            }
          }
        ]
      },
      {
        name: 'route-categories',
        path: 'categories',
        component: () => import('pages/categories/table')
      },
      {
        name: 'route-about',
        path: 'about',
        component: () => import('pages/About')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
