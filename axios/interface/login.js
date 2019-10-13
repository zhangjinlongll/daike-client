/*
 * @Author: kuangxj
 * @Email: frankxjkuang@gmail.com
 * @Date: 2018-08-09 15:12:24
 * @Last Modified by: dragon
 * @Last Modified time: 2019-10-13 01:16:59
 * @Description: login api
 */

import axios from './../api'

const login = data => {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}

export default {
  login
}
