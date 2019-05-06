import Post from './Post';

class TextPost extends Post {
    constructor(id, dateCreated, userId, userName, type, commentsNum, text) {
        super(id, dateCreated, userId, userName, type, commentsNum)
        this.value = text;
    }
}

export default TextPost;