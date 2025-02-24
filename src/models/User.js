const { v4: uuid4 } = require('uuid');

    class User {
        constructor(nome, email,idade){
            this.id = uuid4();
            this.nome = nome;
            this.email = email;
            this.idade = idade;
        }
    }

module.exports = User;