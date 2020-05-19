import axios from 'axios'

export default axios.create({
  headers: {
  },
  baseURL: 'https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com'
});
