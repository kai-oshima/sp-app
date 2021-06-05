import * as React from "react";
import { LinkMenu} from "../../Parts/LinkMenu/LinkMenu";
import "./Header.scss"
import * as Common from '../../Common/Function/Function';

interface Props {
    isLoggedIn : boolean;
}

const Header = (props : Props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        setIsLoggedIn(props.isLoggedIn);
    }, [isLoggedIn]);
    return(
        <div className="header">
            <section className="header-title">
                <h1>Spring</h1>
            </section>
            <nav className="header-nav">
                {props.isLoggedIn ?
                    <ul className="header-nav-ul">
                        <LinkMenu path='/' value='HOME'/>
                        <LinkMenu path='/logout' value='LOGOUT'/>
                    </ul>
                    :
                    <ul className="header-nav-ul">
                        <LinkMenu path='/' value='HOME'/>
                        <LinkMenu path='/login' value='LOGIN'/>
                        <LinkMenu path='/signup' value='SIGN UP'/>
                    </ul>
                }
            </nav>
        </div>
    );
}

export default Header;