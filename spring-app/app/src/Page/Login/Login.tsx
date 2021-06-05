import { useEffect, useState } from "react";
import { Redirect, RouteComponentProps, withRouter } from "react-router";
import * as Common from "../../Common/Function/Function";
import { CommonTextBox } from "../../Parts/CommonTextBox/CommonTextBox";
import { PassTextBox } from "../../Parts/PassTextBox/PassTextBox";
import { SubmitButton } from "../../Parts/SubmitButton/SubmitButton";

interface Props extends RouteComponentProps {
    children ? : any;
}

export const Login = (props : Props) => {
    //state
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[hiddenPass, setHiddenPass] = useState("");
    //ログイン済
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[message, setMessage] = useState("");

    useEffect(() => {

    }, []);

    return (
        <div>
            <section>
                <CommonTextBox
                    label="ユーザーID"
                    value={userName}
                    onChange={setUserName}
                />
                <PassTextBox
                    label="パスワード"
                    value={password}
                    callBack={setPassword}
                    onChange={setPass}
                />
                <SubmitButton
                    value="ログイン"
                    onClick={tryLogin}
                />
            </section>
        </div>
    );

    async function tryLogin(event : any){
        const a = "api/Login/" + userName + "/" + password;
        const response = await fetch(a);
        console.log(response);
        Common.setCookie('login-status', '1');
        props.history.push({pathname: "/main"});
        
    }

    function setPass(val : string, callBack : Function) {
        callBack(val);
    }
};

export default withRouter(Login);