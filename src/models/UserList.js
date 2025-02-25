class UserList {
    constructor(){
        this.users = [];
    }
    addUser(user){
        this.users.push(user);
    }

    getAllUsers(){
        return this.users;
    }
    
    getUserById(id){
        const user = this.users.find(user => user.id == id);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return user;
    }
    updateUser(id, updateData){
        const user = this.getUserById(id);
        Object.assign(user, updateData);
        return user;
    }

    deleteUser(id){
        const user = this.getUserById(id);
        this.users = this.users.filter((user) => user.id !=String(id));
        return user;
    }
}

module.exports = UserList;