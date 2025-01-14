import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import SaveLink from '../views/SaveLink.vue';
import Comment from '../views/Comment.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/details/:linkId', name: 'details', component: Details },
  { path: '/savelink', name: 'savelink', component: SaveLink },
  { path: '/comment/:linkId', name: 'comment', component: Comment },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
