import {reqIndexCate} from '../../api/index'

const state={
  indexCate:[]
}
const mutations={
  RECEIVE_INDEXCATE(state,indexCate){
    state.indexCate = indexCate
  }
}
const actions={
  async getIndexCate({commit},index){
    const result = await reqIndexCate()
      if(result.code===200){
        commit('RECEIVE_INDEXCATE',result.data[index])
      }
  }
}
const getters={

}
export default{
  state,
  mutations,
  actions,
  getters
}