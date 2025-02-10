import axios from 'axios';

export const fetchReviews = () => {
    return axios.get('https://portfolio-js.b.goit.study/api/reviews');
}
