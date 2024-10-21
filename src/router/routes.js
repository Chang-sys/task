const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/DashboardPage.vue'),
        name: 'Dashboard',
      },
      {
        path: 'user-management',
        component: () => import('pages/UserPage.vue'),
        name: 'UserManagement'
      },
    ],
  },
  // Catch all 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
