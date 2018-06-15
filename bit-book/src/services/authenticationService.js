import { serviceURL, key } from '../shared/constants.js';
import axios from 'axios';

class AuthenticationServices {

    loggingIn(logInUser) {
        return axios({
            method: 'POST',
            url: `${serviceURL}/login`,
            headers: {
                Key: key,
                'Content-Type': 'application/json'
            },
            data: logInUser
        })
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
                return response;
            })
    }
}

export default new AuthenticationServices();