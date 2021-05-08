/* Cookie保存 */
export function setCookie(name : string, data : string) {
  let cookie = "app-" + name + "=" + data;
  document.cookie = cookie;
}

/* Cookie取得 */
export function getCookie(name : string) {
  let targetCookie;
  let cookiesArray = document.cookie.split(';');
  
  targetCookie = cookiesArray.find(cookie => {
    let array = cookie.split('=');
    if(('app-' + array[0]) == name){
      return array[1];
    }
  });
  return targetCookie ? targetCookie : "";
}

/* POST通信 */
export async function httpPost(url : string, jsonData : object) {
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
  return result;
}

/* GET通信 */