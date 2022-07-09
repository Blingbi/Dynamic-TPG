const Employee = require(".//Employee");

class Intern extends Employee {
  constructor(info) {
    super(info);

    const { name, id, email, school } = info;
    //name
    this.name = name;
    //id
    this.id = id;
    //email
    this.email = email;
    //role
    this.role = "Intern";
    //school
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;