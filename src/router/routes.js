
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/children', component: () => import('pages/Children.vue') },
      {
        path: '/addchildren' , component: () => import('pages/AddChildren.vue')
      },
      {
        path: '/classes',
        component:() => import('../pages/Classes.vue'),
      },
      {
        path: '/enroll-student/:id' , component: () => import('pages/EnrollStundent.vue')
      }
    ]
  },
  {
    path: '/user-authentication',
    component: () => import('layouts/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('layouts/Register.vue'),
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
