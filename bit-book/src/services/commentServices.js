import { serviceURL } from '../shared/constants.js';
import axios from 'axios';
import Comment from '../entities/Comment';

class CommentServices {

    getComments(id) {
        return axios.get(serviceURL + "/Comments?postId=" + id, {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            const result = response.data;
            return result.map(comment => {
                return new Comment(comment.id, comment.dateCreated, comment.body, comment.postId, comment.authorName, comment.authorId);
            })
        })
    }

    postComment(newComment) {
        return axios({
            method: 'post',
            url: `${serviceURL}/Comments`,
            data: newComment,
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.status)
    }
}

export default new CommentServices();