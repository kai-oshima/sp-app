import * as React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import { LinkMenu } from "../../Parts/LinkMenu/LinkMenu";
import "./Header.scss"

const Header = () => {
    interface Props extends RouteComponentProps {
        children? : any;
    }
    
    React.useEffect(() => {

    }, []);

    return(
        <div className="header">
            <section className="header-title">
                <h1>Spring</h1>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </section>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <LinkMenu path='/' value='HOME'/>
                    <LinkMenu path='login' value='LOGIN'/>
                    <LinkMenu path='/signup' value='SIGN UP'/>
                </ul>
            </nav>
        </div>
    );
}

export default Header;