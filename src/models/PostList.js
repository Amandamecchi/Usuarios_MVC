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
        return this.posts.find(post => post.id === id);
    }

    updatePost(id, updateData){
        const post = this.getPostById(id);
        Object.assign(post, updateData);
        return post;
    }

    deletePost(id){
        this.posts = this.posts.filter((post) => post.id !=String(id));
    }
}

module.exports = PostList;