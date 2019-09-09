const { getMovies, setMovie, getPage } = require("../redux/movieReducer");

//getMovies, setMovie, getPage

describe("movieReducer functions and types", () => {
  test("getMovies() returns movies", () => {
    expect(getMovies().type).toEqual("FETCH_MOVIES");
  });
  test("getMovies() returns user getMovies", () => {
    expect(getMovies().payload).toBeTruthy();
  });
  test("getMovies() returns user getMovies", () => {
    expect(getMovies().type).toBeTruthy();
  });
  test("getMovies() returns user getMovies", () => {
    expect(getMovies().payload).toBeInstanceOf(Promise);
  });
  test("getMovies() returns user getMovies", () => {
    expect(getMovies().payload).toBeDefined();
  });
  test("getMovies() returns user getMovies", () => {
    expect(getMovies().type).toBeDefined();
  });
});
