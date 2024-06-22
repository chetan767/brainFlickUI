export function setNickname(name) {
  localStorage.setItem("nickname", name);
}

export function clearNickname() {
  localStorage.removeItem("nickname");
}

export function getNickname() {
  return localStorage.getItem("nickname");
}

export function setUserId(name) {
  localStorage.setItem("userId", name);
  localStorage.setItem("guestSession", "true");
}

export function getUserId() {
  return localStorage.getItem("userId");
}

export function getGuestSession() {
  return localStorage.getItem("guestSession") == "true" ? true : false;
}

export function setGuestInfo(info) {
  localStorage.setItem("userId", info.user_id);
  localStorage.setItem("nickname", info.nickname);
  localStorage.setItem("token", info.token);
}

export function clearGuestInfo(info) {
  localStorage.clear("userId");
  localStorage.clear("nickname");
  localStorage.clear("token");
}

export function getHeaders() {
  return {
    userId: localStorage.getItem("userId"),
    AUTHORIZATION: "Bearer " + localStorage.getItem("token"),
  };
}
