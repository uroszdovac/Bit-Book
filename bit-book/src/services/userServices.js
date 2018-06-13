import { serviceURL } from '../shared/constants.js';
import axios from 'axios';
import User from '../entities/User';
import Profile from '../entities/Profile';


class UserServices {

    getUsers() {
        return axios.get(serviceURL + "/users", {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
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
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            const user = response.data;
            return new User(user.id, user.name, user.aboutShort, user.lastPostDate, user.avatarUrl);
        })
    }

    getMyProfile() {
        return axios.get(serviceURL + "/profile", {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }).then(response => {
            const profile = response.data;
            return new Profile(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount);
        })
    }

}

export default new UserServices();