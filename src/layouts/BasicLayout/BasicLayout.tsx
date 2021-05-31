import React from "react";
import "./BasicLayout.scss";
import Header from "@/components/Header/Header";

const BasicLayout: React.FC<any> = props => {
    return (
        <div className="BasicLayout">
            <Header />
            {props.children}
        </div>
    )
}

export default BasicLayout;