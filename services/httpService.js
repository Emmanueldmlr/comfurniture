import axios from "axios";
import {getAccessToken} from '../utils/utilities'

class HttpService {

  constructor () {
    this.token = getAccessToken();
    this.baseUrl = process.env.baseUrl
  }

  postData = async (payload,url) => {
    const AuthStr = 'Bearer '.concat(this.token); 
    return axios.post(this.baseUrl + url, payload, { headers: { Authorization: AuthStr } })
  };

  getData = async (url) => {
    const AuthStr = 'Bearer '.concat(this.token); 
    return axios.get(this.baseUrl + url, { headers: { Authorization: AuthStr } })
  };
  
  putData = async (formData='',url) => {
    const AuthStr = 'Bearer '.concat(this.token); 
    return axios.put(this.baseUrl + url, formData, { headers: { Authorization: AuthStr, 'Content-Type': 'application/json; charset=utf-8' } })
  };

  deleteData = async (url) => {
    const AuthStr = 'Bearer '.concat(this.token); 
    return axios.delete(this.baseUrl + url, { headers: { Authorization: AuthStr } })
  };
}
export default HttpService;