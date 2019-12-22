import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Categroy = () => import('../views/categroy/Categroy');
const ShopCar = () => import('../views/shopcar/ShopCar');
const Profile = () => import('../views/profile/Profile');

Vue.use(VueRouter);

const routes = [
  { path: '' , redirect: '/home'},
  { path: '/home' , component: Home},
  { path: '/categroy' , component: Categroy},
  { path: '/shopcar' , component: ShopCar},
  { path: '/profile' , component: Profile}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router