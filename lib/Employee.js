class Employee {
  constructor(info) {
    const { name, id, email, role } = info;
    //name setup
    this.name = name;
    //id setup
    this.id = id;
    //email setup
    this.email = email;
    //role setup
    this.role = role;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Employee;
