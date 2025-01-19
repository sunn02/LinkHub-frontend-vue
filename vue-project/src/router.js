import { createRouter, createWebHistory } from 'vue-router';
import LinksList from './components/linkList.vue';
import LinkDetails from './components/linkDetails.vue';
import LinkForm from './components/linkForm.vue';

const routes = [
  {
    path: '/',
    name: 'LinksList',
    component: LinksList,
  },
  {
    path: '/details/:id',
    name: 'LinkDetails',
    component: LinkDetails,
    props: true, 
  }, {
    path: '/new-link',
    name: 'LinkForm',
    component: LinkForm
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
