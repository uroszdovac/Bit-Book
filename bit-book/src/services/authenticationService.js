import { serviceURL, key } from '../shared/constants.js';
import axios from 'axios';

class AuthenticationServices {

    loggingIn(logInUser) {
        return axios({
            method: 'POST',
            headers: {
                Key: key,
                'Content-Type': 'application/json'
            },
            data: logInUser
        })
    }
}