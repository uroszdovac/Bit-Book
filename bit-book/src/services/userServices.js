import { serviceURL } from '../shared/constants.js';
import axios from 'axios';
import User from '../entities/User';

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
}

export default new PostServices();