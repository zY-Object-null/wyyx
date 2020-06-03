import Mock from 'mockjs'

import IndexData from './datas/index.json'
import indexCate from './datas/indexCateModule.json'
import CateNavList from './datas/cateNavDatas.json'
import CateLists from './datas/cateLists.json'
Mock.mock('/api/bigPromotionModule',{code:200,data:IndexData})
Mock.mock('/api/indexCate',{code:200,data:indexCate})
Mock.mock('/api/cateNavList',{code:200,data:CateNavList})
Mock.mock('/api/cateLists',{code:200,data:CateLists})


console.log('执行了')