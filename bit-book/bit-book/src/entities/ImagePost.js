import Post from './Post';

class ImagePost extends Post {
    constructor(id, dateCreated, userId, userName, type, commentsNum, imageUrl) {
        super(id, dateCreated, userId, userName, type, commentsNum)
        this.value = imageUrl;
    }
}

export default ImagePost;