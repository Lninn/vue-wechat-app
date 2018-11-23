import Cookies from 'js-cookie'

const TokenKey = 'User-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
      return { 'Authorization': 'Bearer ' + user.token }
  } else {
      return {}
  }
}

export function logout() {
  localStorage.removeItem('user')
}