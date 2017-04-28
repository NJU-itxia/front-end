export function setCookie(key, value, hours) {
  var expires  = new Date();
  expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
  document.cookie = key + "=" + value + "; path=/;expires=" + expires.toGMTString();
}

export function getCookie(key) {
  const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`);
  let arr;
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  }
  return null;
}

export function clearCookie(key) {
  const expires = new Date();
  expires.setTime(expires.getTime() - 1);
  const value = this.getCookie(key);
  if(value !== null)
    document.cookie = key + "=" + value + "; path=/;expires=" + expires.toGMTString();
}
