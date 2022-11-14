import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID x5x_pE1O-2CrLfnmqtYh78H-ud9Aaco4XgRd2Rd-vcI'
  }
});
