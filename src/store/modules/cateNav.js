import {reqCateNavList} from '../../api/index'

const state={
  cateNavList:{}
}

const mutations={
RECEIVE_CATENAVLIST(state,data){
  state.cateNavList=data
}
}

const actions={
  async getCateNavList({commit}){
    const result = await reqCateNavList()
    commit('RECEIVE_CATENAVLIST',result.data)
  }
}


const getter={
  
}
export default{
  state,
  actions,
  mutations,
  getter
}