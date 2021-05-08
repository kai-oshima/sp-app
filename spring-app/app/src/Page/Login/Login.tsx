import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import * as Common from "../../Common/Function/Function";
import { CommonTextBox } from "../../Parts/CommonTextBox/CommonTextBox";
import { PassTextBox } from "../../Parts/PassTextBox/PassTextBox";
import { SubmitButton } from "../../Parts/SubmitButton/SubmitButton";
import { TextBox } from "../../Parts/TextBox/TextBox";

interface Props extends RouteComponentProps {
    children ? : any;
}

export const Layout = (props : Props) => {
    //state
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[hiddenPass, setHiddenPass] = useState("");
    //ログイン済
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[message, setMessage] = useState("");

    useEffect(() => {
        if(Boolean(Common.getCookie('login-status'))){
            
        }
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
    }

    function setPass(val : string, callBack : Function) {
        callBack(val);
    }
};

export default withRouter(Layout);