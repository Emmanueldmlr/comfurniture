
import HttpService from './httpService'

export const FetchProducts = () => {
    const http = new HttpService();
    const url = "api/products";
    return http.getData(url)
  };

