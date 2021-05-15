import { Redirect } from "react-router";
import * as Common from "../../Common/Function/Function";

//認証実行
export function authenticate() {

}

//認証確認
export function checkAuth() {
  if(Common.getCookie('login-status') == '1'){
    return true;
  }else{
    return false;
  }
}

//認証確認ルート

export function checkAuthRoute(props : any) {
  return Common.getCookie('login-status') === '1' ? props.children : <Redirect to='/login'/>
}