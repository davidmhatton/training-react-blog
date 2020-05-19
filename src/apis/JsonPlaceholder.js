import axios from 'axios'

export default axios.create({
  headers: {
    'Origin': 'https://localhost:3000'
  },
  baseURL: 'http://jsonplaceholder.typicode.com'
});
