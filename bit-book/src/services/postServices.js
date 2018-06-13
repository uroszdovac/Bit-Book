import { serviceURL } from '../shared/constants.js';
import axios from 'axios';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';
import TextPost from '../entities/TextPost';


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
                if (post.type === 'image') {
                    return new ImagePost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.imageUrl)
                } else if (post.type === 'video') {
                    return new VideoPost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.videoUrl)
                }
                return new TextPost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.text)
            })
        })
    }

    getImagePost(id) {
        return axios.get(serviceURL + "/ImagePosts/" + id, {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            const post = response.data;
            return new ImagePost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.imageUrl)
        });
    }

    getVideoPost(id) {
        return axios.get(serviceURL + "/VideoPosts/" + id, {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            const post = response.data;
            return new VideoPost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.videoUrl)
        });
    }

    getTextPost(id) {
        return axios.get(serviceURL + "/TextPosts/" + id, {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            const post = response.data;
            return new TextPost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.text)
        });
    }

}
export default new PostServices();