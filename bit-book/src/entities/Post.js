class Post {
    constructor(id, dateCreated, userId, userName, type, commentsNum) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.userId = userId
        this.userName = userName
        this.type = type
        this.commentsNum = commentsNum
    }
}

export default Post;