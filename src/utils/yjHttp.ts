/** @format */

import axios from 'axios';
import { Message } from '@alifd/next';
// 此处是再次封装axios，目的是统一处理错误情况以及配置请求头，在使用yjHttp调用接口的时候，一旦调用失败或者任何错误情况，会直接返回false
const yjHttp = axios.create({
  timeout: 100000, // 请求超时的配置
});

// request 的拦截----自定义相关操作
yjHttp.interceptors.request.use(
  config => {
    if (sessionStorage.buildingToken && !config.headers.Authorization) {
      // 在使用yjHttp调用接口的时候，如果自己传了Authorization，那么就会使用自己传的Authorization，否则使用下面默认的
      config.headers.Authorization = sessionStorage.buildingToken;
    }

    return config;
  },
  error => {
    console.error('请求拦截的错误', error);
  },
);

// response 的拦截----自定义相关操作
yjHttp.interceptors.response.use(
  ({ data, status, headers }) => {
    // 在此处处理后端返回的数据
    if (status === 200) {
      // 说明后端已经正常返回数据
      if (data.code) {
        if (data.code === 'SUCCESS') {
          return data.data ? data.data : true;
        } else {
          Message.error(data.message);
          console.error(data.message);
          return false;
        }
      }
      return data; // 这一步直接返回的目的是处理后端直接返回文件流的情况（在调导出excel接口时会有这种情况）
    } else {
      Message.error('调用接口失败');
      return false;
    }
  },
  error => {
    if (error.response && error.response.status === 401) {
      // 说明账号在别处登陆了，需要退出重新登录
      // Message.error('Token已过期,请重新登录！', 2);
      setTimeout(() => {
        // window.location.hash = '#/login';
        // sessionStorage.clear();
      }, 2000);
    } else {
      Message.error('调用接口失败');
      // message.info('数字孪生平台服务升级中，请稍后（若长期显示该状态请联系技术人员）', 3);
      console.error('返回拦截的错误', error.response);
    }
  },
);

export default yjHttp;
