class PostList {
    constructor(){
        this.posts = [];
    }

    addPost(post){
        this.post.push(post);
    }
    getAllPosts(){
        return this.posts;
    }
    getPostById(id){
        const post = this.post.find(post => post.id === id);
        if (!post) throw new Error('Post not found');
        return post;
    }
    updatePost(id){
        const post = this.find(post => post.id === id);
        if (!post) throw new Error('Post not found');
        return post;
    }
    updatePost(id, updateData){
        const post = this.getPostById(id);
        Object.assign(post, updateData);
        return post;
    }
    deletePost(id){
        this.post = this.posts.filter(post => post.id !== id);
    }
    getPost(id){
        return this.posts.find(post => post.id === id);
    }

}
module.exports = PostList;