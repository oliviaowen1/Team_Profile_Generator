const Engineer = require("../lib/Engineer");

test("Can set GitHUb account using the constructor", () => {
  const testVals = "GitHubUser";
  const eng = new Engineer("example", 1, "test@test.com", testVals);
  expect(eng.github).toBe(testVals);
});

test("getRole() should return \"Engineer\"", () => {
  const testVals = "Engineer";
  const eng = new Engineer("example", 1, "test@test.com", "GitHubUser");
  expect(eng.getRole()).toBe(testVals);
});

test("Can get GitHub username via getGithub()", () => {
  const testVals = "GitHubUser";
  const eng = new Engineer("example", 1, "test@test.com", testVals);
  expect(eng.getGithub()).toBe(testVals);
});