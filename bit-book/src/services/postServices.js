import { serviceURL } from '../shared/constants.js';
import axios from 'axios';
import Post from '../entities/User';


class PostServices {

    getPosts() {
        return axios.get(serviceURL + "/posts", {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            const result = response.data;
            return result.map(post => {
                return new Post(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum)
            })
        })
    }
}

export default new PostServices();