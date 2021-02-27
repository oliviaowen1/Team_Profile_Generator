const Employee = require('./employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        //Custom behaviour of Manager
        this.officeNumber = officeNumber;
    }
    getOfficeNum() {
        return this.officeNumber;
    }
    getRole() {
       return "Manager";
    }
}
module.exports = Manager;