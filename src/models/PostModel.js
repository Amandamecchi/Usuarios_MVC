const { v4: uuid4 } = require('uuid');

    class Post {
        constructor(imagem, likes, comentarios){
            this.id = uuid4();
            this.imagem = imagem;
            this.likes = likes;
            this.comentarios = comentarios;
        }
    }

module.exports = Post;