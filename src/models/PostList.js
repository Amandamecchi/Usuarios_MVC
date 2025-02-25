class PostList {
    constructor(){
        this.posts = [];
    }

    addPost(post){
        this.posts.push(post);
    }

    getAllPost(){
        return this.posts;
    }

    getPostById (id){
        const post = this.find(post => post.id == id);
        if (!post) throw new Error("postagem não encontrada")
        return post;
    }
    

    
    getPostById(id){
        const post = this.post.find(post => post.id == id);
        if (!post) {
            throw new Error("Não foi possível encontrar esse post");
        }
        return post;
    }

    updatePost(id, updateData){
        const post = this.getPostById(id);
        Object.assign(post, updateData);
        return post;
    }

    deletePost(id){
        this.posts = this.post.filter((post) => post.id !=String(id));
    }
}

module.exports = PostList;