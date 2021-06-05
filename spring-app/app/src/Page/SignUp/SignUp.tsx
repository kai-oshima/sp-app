import * as React from 'react';
import { withRouter } from 'react-router';
import * as Common from '../../Common/Function/Function';
import { CommonTextBox } from '../../Parts/CommonTextBox/CommonTextBox';
import { PassTextBox } from '../../Parts/PassTextBox/PassTextBox';
import { SubmitButton } from '../../Parts/SubmitButton/SubmitButton';
import Header from '../Header/Header';

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
      <Header isLoggedIn={false} />
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
  }

  //登録処理
  function registAccount(event : any) {
    const url = 'api/RegistAccount';
    const jsonData = {firstName, lastName, userId, password};
    //登録実行後にページ呼び出しを行う
    Common.httpPost(url, jsonData, callPage);
  }

  //ページ呼び出し
  function callPage(response : string){
    console.log(response);
  }
}

export default withRouter(SignUp)