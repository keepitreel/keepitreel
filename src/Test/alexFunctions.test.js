const { generateText } = require("./alexFunctions");

test("should output name and username", () => {
  const text = generateText("Alex", "Alexander the Great");
  expect(text).toBe("Alex Alexander the Great");
});
