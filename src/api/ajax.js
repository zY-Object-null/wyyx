import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const ajax= axios.create({
  baseURL:'/api',
  timeOut: 20000
})
ajax.interceptors.request.use(config =>{
  Nprogress.start()
  return config
})
ajax.interceptors.response.use(response =>{
  Nprogress.done()
  return response.data
},error=>{
  Nprogress.done()
  alert('请求出错:' + error.message || '未知错误')
  return Promise.reject(error)
})

export default ajax
