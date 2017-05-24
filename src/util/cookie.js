function set(key, value, hours) {
  var expires  = new Date();
  expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
  document.cookie = key + "=" + value + "; path=/;expires=" + expires.toGMTString();
}

function get(key) {
  const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`);
  let arr;
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  }
  return null;
}

function clear(key) {
  const expires = new Date();
  expires.setTime(expires.getTime() - 1);
  const value = get(key);
  if(value !== null)
    document.cookie = key + "=" + value + "; path=/;expires=" + expires.toGMTString();
}

export default {
  clear,
  get,
  set
};
