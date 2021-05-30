import React from "react";
import "./Header.scss";
import classNames from "classnames";

interface HeaderProps {
    className?:string;
}

const Header:React.FC<HeaderProps> = props => {
    const {
        className
    } = props;
    const classes = classNames(`${className} Header`)
    return (
        <div className={classes}>
            这是系统头部
        </div>
    )
}
export default Header;