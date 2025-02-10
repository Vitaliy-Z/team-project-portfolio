import axios from 'axios';

const API_URL = 'https://portfolio-js.b.goit.study/api/';

export const fetchReviews = () => axios.get(API_URL + 'reviews');

export const fetchComment = async userData => {
  try {
    const data = await axios.post(API_URL + 'requests', userData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
