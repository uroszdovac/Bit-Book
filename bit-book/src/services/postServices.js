import { serviceURL } from '../shared/constants.js';
import axios from 'axios';

class PostServices {

    getPosts() {
        return axios.get(serviceURL + "/posts", {
            headers: {
                Key: 'bitbookdev',
                SessionId: '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        })
    }
}

export default new PostServices();