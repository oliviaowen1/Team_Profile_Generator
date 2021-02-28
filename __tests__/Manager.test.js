const Manager = require("../lib/Manager");

test("Can set office number via our constructors", () => {
  const testVals = 100;
  const man = new Manager("olivia", 1, "test@test.com", testVals);
  expect(man.officeNumber).toBe(testVals);
});

test("getRole() should return \"Manager\"", () => {
  const testVals = "Manager";
  const man = new Manager("olivia", 1, "test@test.com", 100);
  expect(man.getRole()).toBe(testVals);
});

test("Can get office number via getOfficeNum()", () => {
  const testVals = 100;
  const man = new Manager("olivia", 1, "test@test.com", testVals);
  expect(man.getOfficeNum()).toBe(testVals);
});