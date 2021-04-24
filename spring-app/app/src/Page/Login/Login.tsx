import { useEffect, useState } from "react";

function Login(){
const[userName, setUserName] = useState("");
const[password, setPassword] = useState("");

    useEffect(() => {

    });

    async function tryLogin(){
        const url = "api/Login/" + userName + "/" + password;
        const response = await fetch(url);
        console.log(response);
    }

    return (
        <div className="main">
            <section>
                <label>ID</label>
                <input type="text" onChange={(e) => {setUserName(e.target.value)}}></input>
                <label>E-mail</label>
                <input type="text" id="pass" onChange={(e) => {setPassword(e.target.value)}}></input>
                <button onClick={tryLogin}>LOGIN</button>
            </section>
        </div>
    );
};

export default Login;