class PostList {
    constructor() {
        this.posts = []; // Inicializando a lista de posts como um array vazio
    }

    addPost(post) {
        this.posts.push(post); // Adicionando o post à lista
    }

    getAllPost() {
        return this.posts; // Retornando todos os posts
    }

    getPostById(id) {
        const post = this.posts[id];
        if (!post) {
            throw new Error("Post não encontrado");
        }
        return post;
    }

    updatePost(id, updatedData) {
        const post = this.getPostById(id);
        Object.assign(post, updatedData); // Atualizando os dados do post
        return post;
    }

    deletePost(id) {
        const post = this.getPostById(id);
        this.posts.splice(id, 1); // Removendo o post da lista
        return post;
    }
}

module.exports = PostList;