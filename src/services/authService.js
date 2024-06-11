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
