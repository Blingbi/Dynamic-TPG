const Employee = require("./Employee");

class Engineer extends Employee {

  constructor(info) {
    super(info);

    const { name, id, email, github } = info;
    //name
    this.name = name;
    //id
    this.id = id;
    //email
    this.email = email;
    //role
    this.role = "Engineer";
    //GitHub
    this.github = github;
  }
  getGitHub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}
module.exports = Engineer;
