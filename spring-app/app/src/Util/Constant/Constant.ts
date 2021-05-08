export class CONSTANT {
  //ログインページ
  static readonly PAGE_TYPE_LOGIN : string = "login";
  static readonly PAGE_TYPE_PRE_PREGIST : string = "pre_regist";
  static readonly PAGE_TYPE_PREGIST : string = "regist";
  static readonly PAGE_TYPE_CHANGE_PASS : string = "change_pass";
  static readonly PAGE_TYPE_FORGET_PASS : string = "forget_pass";

  //ログインページ画面項目
  static readonly PAGE_CONTENT : any = {
    "login" : {
      "title" : "", 
      "buttonVal" : "ログイン"
    },
    "pre_regist" : {
      "title" : "", 
      "buttonVal" : "",
    },
    "regist" : {
      "title" : "Springへようこそ", 
      "buttonVal" : "アカウント作成",
    },
    "change_pass" : {
      "title" : "", 
      "buttonVal" : "パスワードを変更する",
    },
    "forget_pass" : {
      "title" : "", 
      "buttonVal" : "",
    }
  }
}