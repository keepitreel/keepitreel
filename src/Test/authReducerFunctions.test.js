const {
  checkForLogin,
  register,
  login,
  logout,
  updateLogin,
  updateUser
} = require("../redux/authReducer");

describe("authReducer functions and types", () => {
  test("login() returns user login", () => {
    expect(login().type).toEqual("LOGIN_USER");
  });
  test("login() returns user login", () => {
    expect(login().payload).toBeTruthy();
  });
  test("login() returns user login", () => {
    expect(login().type).toBeTruthy();
  });
  test("login() returns user login", () => {
    expect(login().payload).toBeInstanceOf(Promise);
  });
  test("login() returns user login", () => {
    expect(login().payload).toBeDefined();
  });
  test("login() returns user login", () => {
    expect(login().type).toBeDefined();
  });

  test("logout() returns user logout", () => {
    expect(logout().type).toEqual("LOGOUT");
  });
  test("logout() returns user logout", () => {
    expect(logout().payload).toBeTruthy();
  });
  test("logout() returns user logout", () => {
    expect(logout().type).toBeTruthy();
  });
  test("logout() returns user logout", () => {
    expect(logout().payload).toBeInstanceOf(Object);
  });
  test("logout() returns user logout", () => {
    expect(logout().payload).toBeDefined();
  });
  test("logout() returns user logout", () => {
    expect(logout().type).toBeDefined();
  });

  test("register() returns user register", () => {
    expect(register().type).toEqual("REGISTER");
  });
  test("register() returns user register", () => {
    expect(register().payload).toBeTruthy();
  });
  test("register() returns user register", () => {
    expect(register().type).toBeTruthy();
  });
  test("register() returns user register", () => {
    expect(register().payload).toBeInstanceOf(Promise);
  });
  test("register() returns user register", () => {
    expect(register().payload).toBeDefined();
  });
  test("register() returns user register", () => {
    expect(register().type).toBeDefined();
  });

  test("checkForLogin() returns check for session", () => {
    expect(checkForLogin().type).toEqual("CHECK_FOR_LOGIN");
  });
  test("checkForLogin() returns user checkForLogin", () => {
    expect(checkForLogin().payload).toBeFalsy();
  });
  test("checkForLogin() returns user checkForLogin", () => {
    expect(checkForLogin().type).toBeTruthy();
  });
  test("checkForLogin() returns user checkForLogin", () => {
    expect(checkForLogin().payload).toEqual(undefined);
  });
  test("checkForLogin() returns user checkForLogin", () => {
    expect(checkForLogin().payload).toBeUndefined();
  });
  test("checkForLogin() returns user checkForLogin", () => {
    expect(checkForLogin().type).toBeDefined();
  });

  test("updateLogin() returns check for session", () => {
    expect(updateLogin().type).toEqual("UPDATE_LOGIN");
  });
  test("updateLogin() returns user updateLogin", () => {
    expect(updateLogin().payload).toBeTruthy();
  });
  test("updateLogin() returns user updateLogin", () => {
    expect(updateLogin().type).toBeTruthy();
  });
  test("updateLogin() returns user updateLogin", () => {
    expect(updateLogin().payload).toBeInstanceOf(Object);
  });
  test("updateLogin() returns user updateLogin", () => {
    expect(updateLogin().payload).toBeDefined();
  });
  test("updateLogin() returns user updateLogin", () => {
    expect(updateLogin().type).toBeDefined();
  });

  test("updateUser() returns check for session", () => {
    expect(updateUser().type).toEqual("UPDATE_USER");
  });
  test("updateUser() returns user updateUser", () => {
    expect(updateUser().payload).toBeFalsy();
  });
  test("updateUser() returns user updateUser", () => {
    expect(updateUser().type).toBeTruthy();
  });
  test("updateUser() returns user updateUser", () => {
    expect(updateUser().payload).toEqual(undefined);
  });
  test("updateUser() returns user updateUser", () => {
    expect(updateUser().payload).toBeUndefined();
  });
  test("updateUser() returns user updateUser", () => {
    expect(updateUser().type).toBeDefined();
  });
});
