const routes = [
  {
    path: '/',
    component: () => import('pages/NickNamePage.vue')

  },
  {
    path: '/nickname',
    component: () => import('pages/NickNamePage.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
