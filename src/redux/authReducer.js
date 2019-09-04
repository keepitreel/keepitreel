import axios from "axios";

const initialState = {
  username: "",
  password: "",
  user_id: "",
  name: "",
  email: "",
  avatarurl: ""
};

const LOGIN_USER = "LOGIN_USER";
const REGISTER = "REGISTER";
const UPDATE_LOGIN = "UPDATE_LOGIN";
const LOGOUT = "LOGOUT";
const UPDATE_USER = "UPDATE_USER";
const CHECK_FOR_LOGIN = "CHECK_FOR_LOGIN";

export function checkForLogin(value) {
  return {
    type: CHECK_FOR_LOGIN,
    payload: value
  };
}

export function login(username, password) {
  let data = axios.post("/api/login", { username, password });
  return {
    type: LOGIN_USER,
    payload: data
  };
}

export function register(username, name, password, email) {
  let data = axios.post("/api/login/register", {
    username,
    name,
    password,
    email
  });
  return {
    type: REGISTER,
    payload: data
  };
}

export function updateLogin(name, value) {
  return {
    type: UPDATE_LOGIN,
    payload: { name, value }
  };
}

export function logout() {
  axios.post("./api/login/logout");
  return {
    type: LOGOUT,
    payload: initialState
  };
}

export function updateUser(value) {
  return {
    type: UPDATE_USER,
    payload: value
  };
}

export function authReducer(state = initialState, action) {
  console.log(action);
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        username: payload.data.username,
        user_id: payload.data.user_id,
        email: payload.data.email,
        avatarurl: payload.data.avatarurl,
        name: payload.data.name,
        error: "",
        pending: false
      };
    // console.log(state)

    case `${LOGIN_USER}_REJECTED`:
      return {
        ...state,
        error: "email or password incorrect",
        pending: false
      };
    case `${LOGIN_USER}_PENDING`:
      return { ...state, pending: true };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        username: payload.data.username,
        email: payload.data.email,
        user_id: payload.data.user_id,
        name: payload.data.name
      };
    case `${REGISTER}_REJECTED`:
      return { ...state, password: "", username: "", error: "register" };
    case `${REGISTER}_PENDING`:
      return { ...state, password: "", username: "", error: "" };
    case `${LOGOUT}`:
      return { ...state, ...payload };
    case `${LOGOUT}_REJECTED`:
      return { ...state, error: "logout" };
    case `${LOGOUT}_PENDING`:
      return { ...state, error: "" };
    case UPDATE_LOGIN:
      return { ...state, [payload.name]: payload.value };
    case `${UPDATE_USER}`:
      return { ...state, error: "", pending: false };
    case `${CHECK_FOR_LOGIN}`:
      return { ...payload, error: "", pending: false };
    default:
      return state;
  }
}
