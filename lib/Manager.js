const Employee = require(".//Employee");

class Manager extends Employee {
  constructor(info) {
    super(info);
    const { name, id, email, officeNumber } = info;
    //name
    this.name = name;
    //id
    this.id = id;
    //email
    this.email = email;
    //role
    this.role = "Manager";
    // manager
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;
