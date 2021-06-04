/** @format */

import React from 'react';
import './Login.scss';
import { Button } from '@alifd/next';
import { useHistory } from 'react-router-dom';
import store from '@/store';

const Login = () => {
  const [commonState, commonDispatchers] = store.useModel('commonModel');
  const history = useHistory();

  const click = () => {
    console.log(commonState, '哈哈哈');
    commonDispatchers.setState({
      systemName: '更改之后的系统名称',
    });
    // history.push('/basic');
    history.push('/basic/home');
  };

  return (
    <div className="Login">
      这是登录页面
      <div className="Login-bg">
        <div>hahah</div>
      </div>
      <Button onClick={click} type="primary">
        跳转至主页
      </Button>
    </div>
  );
};

export default Login;
