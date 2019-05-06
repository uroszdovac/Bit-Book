import Post from './Post';

class VideoPost extends Post {
    constructor(id, dateCreated, userId, userName, type, commentsNum, videoUrl) {
        super(id, dateCreated, userId, userName, type, commentsNum)
        this.value = videoUrl;
    }
}

export default VideoPost;