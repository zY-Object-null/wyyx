import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Nav from './pages/Home/Nav'
import Header from './pages/Home/Header'
import Foot from './pages/foot'
import './mock/index'
import store from './store'
import MySwipe from './components/Swiper'
Vue.config.productionTip = false
import { Button, Search, Tab, Tabs, Icon,Tabbar, TabbarItem, Row, Col,Swipe, Popup , SwipeItem
,Sidebar, SidebarItem } from "vant";

Vue.use(Button);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.component('Header',Header)
Vue.component('Nav',Nav)
Vue.component('Foot',Foot)

Vue.component('MySwipe',MySwipe)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')