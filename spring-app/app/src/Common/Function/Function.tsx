import { Redirect } from "react-router";

/* Cookie保存 */
export function setCookie(name : string, data : string) {
  let cookie = "app-" + name + "=" + data;
  document.cookie = cookie;
}

/* Cookieの値取得 */
export function getCookie(name : string) {
  let targetVal = '';
  let cookiesArray = document.cookie.split(';');

  cookiesArray.forEach(cookie => {
    let array = cookie.split('=');
    if((array[0]) === 'app-' + name){
      targetVal = array[1];
    }
  });
  return targetVal !== '' ? targetVal : "";
}

/* POST通信 */
export async function httpPost(url : string, jsonData : object, callBack : Function) {
  const options = {
    method: 'POST',
    headers: {
      'Accept':  'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }

  //通信
  const result =
  await fetch(url, options)
  .then(response => {
    //通信成功
    if(response.ok){
      console.log(response);
      return response.json();
    }else{
      let error = response.status.toString() + ':' + response.statusText;
      throw Error(error);
    }
  })
  .catch(error => {
    console.log(error);
    return null;
  })
  //実行したい処理
  callBack(result);
}

/* GET通信 */

/* ログインチェック */
export function isLoggedIn () {
  return getCookie('login-status') === '1' ? true : false;
}

/* ログアウト処理 */
export function  logout() {
  setCookie('login-status', '0');
}