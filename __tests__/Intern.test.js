const Intern = require("../lib/Intern");

test("Can set school using the constructors", () => {
  const testValue = "UOB";
  const int = new Intern("example", 1, "test@test.com", testValue);
  expect(int.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const int = new Intern("example", 1, "test@test.com", "UOB");
  expect(int.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UOB";
  const int = new Intern("example", 1, "test@test.com", testValue);
  expect(int.getSchool()).toBe(testValue);
});