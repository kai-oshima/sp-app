import * as React from 'react';
import { withRouter } from 'react-router';
import * as Common from '../../Common/Function/Function';
import { CommonTextBox } from '../../Parts/CommonTextBox/CommonTextBox';
import { PassTextBox } from '../../Parts/PassTextBox/PassTextBox';
import { SubmitButton } from '../../Parts/SubmitButton/SubmitButton';
import { TextBox } from '../../Parts/TextBox/TextBox';

export const SignUp = () => {
  const[firstName, setFirstName] = React.useState("");
  const[lastName, setLastName] = React.useState("");
  const[password, setPassword] = React.useState("");
  const[rePassword, setRepassword] = React.useState("");
  const[userId, setUserId] = React.useState("");
  const[message, setMessage] = React.useState("");

  React.useEffect(() => {

  }, []);

  return(
    <div className="sign-up">
      {message}
      <CommonTextBox
        label='姓'
        value={firstName}
        onChange={setFirstName} />
      <CommonTextBox
        label='名'
        value={lastName}
        onChange={setLastName} />
      <CommonTextBox
        label='ユーザーID'
        value={userId}
        onChange={setUserId} />
      <PassTextBox
        label='パスワード'
        value={password}
        callBack={setPassword}
        onChange={setPass} />
      <PassTextBox
        label='再パスワード'
        callBack={setRepassword}
        value={rePassword}
        onChange={setPass} />
      <SubmitButton
        value='アカウントを作成'
        onClick={registAccount} />
    </div>
  );

  function setPass(val : string, setPass : Function) {
    setPass(val);

/*     if(password == rePassword){
      setMessage("");
    }else{
      setMessage("パスワードが一致していません");
    } */
  }

  function registAccount(event : any) {
    const url = 'api/RegistAccount';
    const jsonData = {firstName, lastName, userId, password};
    const response = Common.httpPost(url, jsonData);
    console.log(response);
  }
}

export default withRouter(SignUp)