const functions = require("../redux/authReducer");

// Received has type:  object
// Received has value: {"payload": {}, "type": "LOGIN_USER"}
// test("tests if called with arguments should return oject {type, payload}", () => {
//   expect(functions.login("moviebuff1", "password")).toHaveBeenCalledWith(
//     "moviebuff1",
//     "password"
//   );
// });

// test("should return oject {type, payload}", () => {
//   expect(functions.login("moviebuff1", "password")).toEqual({
//     payload: {},
//     type: "LOGIN_USER"
//   });
// });

test("should return oject {type, payload}", () => {
  expect(functions.login().type).toEqual("LOGIN_USER");
});

// test("should return oject {type, payload}", () => {
//   expect(functions.login("moviebuff1", "password")).toEqual(
//     .toBeInstanceOf(Promise)
//   );
// });

// describe('auth reducer', () => {
//     test('should return the initial state', () => {
//       expect(reducer(undefined, {})).toEqual([
//         {
//             username: "",
//             password: "",
//             user_id: "",
//             name: "",
//             email: "",
//             avatarurl: ""
//           }
//       ])
//     })

// describe('todos reducer', () => {
//     it('should return the initial state', () => {
//       expect(reducer(undefined, {})).toEqual([
//         {
//             username: "",
//             password: "",
//             user_id: "",
//             name: "",
//             email: "",
//             avatarurl: ""
//         }
//       ])
//     })
// }
