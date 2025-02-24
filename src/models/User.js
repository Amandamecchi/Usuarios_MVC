class User {
    constructor(name, email, age){
        this.id = Date.now().toString();
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

module.exports = User;