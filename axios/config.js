/*
 * @Author: kuangxj
 * @Email: frankxjkuang@gmail.com
 * @Date: 2018-04-23 09:22:51
 * @Last Modified by: dragon
 * @Last Modified time: 2019-10-13 23:07:58
 * @Description: axios 默认的配置
 */
import api from '../config/api'
export default {
    method: 'post',
    // 基础url前缀
    baseURL: 'http://106.54.126.156:8081',
    // 请求头信息
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: 'json'
}
