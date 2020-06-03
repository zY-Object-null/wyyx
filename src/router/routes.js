import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Deserve from '../pages/Deserve/Deserve.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'
import Person from '../pages/Person/Person.vue'
import NavItem from '../pages/Home/Nav/NavItem/NavItem.vue'
export default[
  {
    path:'/home',
    component:Home,
     
  },
  {
    path:'/other/:key',
    component:NavItem
  },
  {
    path:'/category/:key',
    component:Category
  },
  {
    path:'/deserve',
    component:Deserve
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/person',
    component:Person
  },
  {
    path:'/',
    redirect:'/home'
  }
]