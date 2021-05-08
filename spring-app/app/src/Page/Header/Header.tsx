import { useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className="header">
            <h1>Spring</h1>
            <nav>
                <ul>
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
};

export default Header;