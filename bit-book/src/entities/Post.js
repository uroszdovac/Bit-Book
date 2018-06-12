class Post {
    constructor(value, id, dateCreated, userId, userName, type, commentsNum) {
        this.value = value;
        this.id = id;
        this.dateCreated = dateCreated;
        this.userId = userId
        this.userName = userName
        this.type = type
        this.commentsNum = commentsNum
    }
}

export default Post;