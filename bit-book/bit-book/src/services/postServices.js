import { serviceURL, key, getSessionId } from '../shared/constants.js';
import axios from 'axios';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';
import TextPost from '../entities/TextPost';


class PostServices {

    getPosts() {
        return axios.get(serviceURL + "/posts", {
            headers: {
                Key: key,
                SessionId: getSessionId()
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
        });


    }

    getImagePost(id) {
        return axios.get(serviceURL + "/ImagePosts/" + id, {
            headers: {
                Key: key,
                SessionId: getSessionId()
            }
        }).then(response => {
            const post = response.data;
            return new ImagePost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.imageUrl)
        });
    }

    getVideoPost(id) {
        return axios.get(serviceURL + "/VideoPosts/" + id, {
            headers: {
                Key: key,
                SessionId: getSessionId()
            }
        }).then(response => {
            const post = response.data;
            return new VideoPost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.videoUrl)
        });
    }

    getTextPost(id) {
        return axios.get(serviceURL + "/TextPosts/" + id, {
            headers: {
                Key: key,
                SessionId: getSessionId()
            }
        }).then(response => {
            const post = response.data;
            return new TextPost(post.id, post.dateCreated, post.userId, post.userDisplayName, post.type, post.commentsNum, post.text)
        });
    }

    sendVideoPost(newVideoPost) {
        return axios({
            method: 'post',
            url: `${serviceURL}/VideoPosts`,
            data: newVideoPost,
            headers: {
                Key: key,
                SessionId: getSessionId(),
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.status)
    }

    sendImagePost(newImagePost) {
        return axios({
            method: 'post',
            url: `${serviceURL}/ImagePosts`,
            data: newImagePost,
            headers: {
                Key: key,
                SessionId: getSessionId(),
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.status)
    }

    sendTextPost(newTextPost) {
        return axios({
            method: 'post',
            url: `${serviceURL}/TextPosts`,
            data: newTextPost,
            headers: {
                Key: key,
                SessionId: getSessionId(),
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.status)
    }


    deletePost(id) {
        return axios({
            method: 'delete',
            url: `${serviceURL}/Posts/${id}`,
            headers: {
                Key: key,
                SessionId: getSessionId()
            }

        })
            .then(response => response.status)
    }


}
export default new PostServices();