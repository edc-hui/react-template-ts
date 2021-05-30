import React from "react";
import "./Login.scss";
import Header from "@/components/Header/Header";
import {Button} from "@alifd/next";

const Login = () => {
    console.log("哈哈哈哈111")

    const click = () => {
        console.log("点击按钮了啊啊")
    }

    return (
        <div>
            这是登录页面
            <Header />

            <Button onClick={click} type="primary">啊哈aaa哈哈</Button>
        </div>
    )
}

export default Login