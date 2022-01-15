import axios from 'axios';

import { SERVER_URL } from '../constants/SERVER_URL';

export default axios.create({
  baseURL: SERVER_URL,
});
