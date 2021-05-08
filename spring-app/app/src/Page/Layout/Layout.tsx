import { useEffect, useState} from "react";
import Header from "../Header/Header";
import { BrowserRouter as Router, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import Login from "../Login/Login";
import {CONSTANT} from '../../Util/Constant/Constant';

interface Props extends RouteComponentProps {
    children? : any;
}

const Layout = (props : Props) => {
    console.log(props);
    return(
        <div id="main">
                <Header/>
                {props.children}
        </div>
    );
}

export default withRouter(Layout);