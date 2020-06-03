import {reqCateLists} from '../../api/index'

const state={
  cateLists:{}
}

const mutations={
RECEIVE_CATELISTS(state,data){
  state.cateLists=data
}
}

const actions={
  async getCateLists({commit},i){
    const result = await reqCateLists()
    commit('RECEIVE_CATELISTS',result.data[i])
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