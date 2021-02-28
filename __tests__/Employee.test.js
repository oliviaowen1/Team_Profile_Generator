const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can create an Employee instance", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    it("Can set name using constructor arguments", () => {
        const name = "Olivia";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    it("Can set ID using the constructor argument", () => {
        const testValue = 100;
        const emp = new Employee("example", testValue);
        expect(emp.id).toBe(testValue);
    });

    it("Can set email using our constructor argument", () => {
        const testValue = "test@test.com";
        const emp = new Employee("example", 1, testValue);
        expect(emp.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "olivia";
            const emp = new Employee(testValue);
            expect(emp.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const emp = new Employee("example", testValue);
            expect(emp.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const emp = new Employee("example", 1, testValue);
            expect(emp.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const emp = new Employee("olivia", 1, "test@test.com");
            expect(emp.getRole()).toBe(testValue);
        });
    });
    
});