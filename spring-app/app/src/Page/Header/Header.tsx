import * as React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import "./Header.scss"

const Header = () => {
    interface Props extends RouteComponentProps {
        children? : any;
    }
    
    React.useEffect(() => {

    }, []);

    return(
        <div className="header">
            <h1 className="header-title">Spring</h1>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/signup">SIGN UP</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;