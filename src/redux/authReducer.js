import axios from "axios";

const initialState = {
  username: "",
  password: "",
  user_id: "",
  username: "",
  name: "",
  email: "",
  avatarurl: ""
};

const CREATE_USER = "CREATE_USER";
const CHECK_LOGIN = "CHECK_LOGIN";

export function login(username, password) {
  return {
    type: CREATE_USER,
    payload: axios.post("/api/login", { username, password }).then(res => {
      return res.data;
    })
  };
}

export function checkLogin(value) {
  return {
    type: CHECK_LOGIN,
    payload: value
  };
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case `${CREATE_USER}_FULFILLED`:
      return {
        ...action.payload,
        error: "",
        pending: false
      };
    case `${CREATE_USER}_REJECTED`:
      return {
        ...state,
        error: "email or password incorrect",
        pending: false
      };
    case `${CREATE_USER}_PENDING`:
      return { ...state, pending: true };
    case `CHECK_LOGIN`:
      console.log(action.payload);
      return { ...action.payload, error: "", pending: false };
    default:
      return state;
  }
}
