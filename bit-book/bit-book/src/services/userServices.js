import { serviceURL, key, getSessionId } from '../shared/constants.js';
import axios from 'axios';
import User from '../entities/User';
import UserProfile from '../entities/UserProfile'

class UserServices {

    getUsers() {

        return axios.get(serviceURL + "/users", {
            headers: {
                Key: key,
                SessionId: getSessionId()
            }
        }).then(response => {
            const result = response.data;
            return result.map(user => {
                return new User(user.id, user.name, user.aboutShort, user.lastPostDate, user.avatarUrl);
            })
        })
    }

    getUser(id) {
        return axios.get(serviceURL + "/users/" + id, {
            headers: {
                Key: key,
                SessionId: getSessionId()
            }
        }).then(response => {
            const user = response.data;
            return new UserProfile(user.userId, user.name, user.email, user.aboutShort, user.about, user.avatarUrl, user.postsCount, user.commentsCount);
        })
    }

    getMyProfile() {
        return axios.get(serviceURL + "/profile", {
            headers: {
                Key: key,
                SessionId: getSessionId()
            }
        }).then(response => {
            const profile = response.data;
            return new UserProfile(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount);
        })
    }

    updateProfile(newProfile) {
        return axios({
            method: 'PUT',
            url: `${serviceURL}/Profiles`,
            data: newProfile,
            headers: {
                Key: key,
                SessionId: getSessionId()
            }
        })
            .then(response => response.status)
    }

    uploadImage(formData) {
        return axios({
            method: 'POST',
            url: `${serviceURL}/upload`,
            headers: {
                Key: key,
                SessionId: getSessionId()
            },
            data: formData
        }).then(response => response.data);
    }
}

export default new UserServices();