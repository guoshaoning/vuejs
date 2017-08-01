import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content'
import Buycar from '@/components/buycar'
import Book from '@/components/book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/buy',
      name: 'Buycar',
      component: Buycar
    },
    {
      path: '/book/:id',
      name: 'Book',
      component: Book
    }
  ]
})
