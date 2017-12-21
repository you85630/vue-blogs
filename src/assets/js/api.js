import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.timeout = 5000

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params
    }).catch(function (err) {
      console.log(err)
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data
    }).catch(function (err) {
      console.log(err)
    })
  }
}
