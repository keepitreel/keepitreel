import axios from "axios";

const initialState = {
  username: "",
  password: "",
  user_id: "",
  name: "",
  email: ""
};

const LOGIN_USER = "LOGIN_USER";
const REGISTER = "REGISTER";
const UPDATE_LOGIN = "UPDATE_LOGIN";

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

    case UPDATE_LOGIN:
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
}
