import postServices from '../../services/postServices';

postServices.getPosts().then(response => console.log(response.data));


