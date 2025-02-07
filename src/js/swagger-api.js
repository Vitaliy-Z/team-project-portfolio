import axios from 'axios';

export const fetchPhotosByQuery = () => {
    return axios.get('https://portfolio-js.b.goit.study/api');
}

console.log(fetchPhotosByQuery);