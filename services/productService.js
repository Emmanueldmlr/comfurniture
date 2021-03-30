
import HttpService from './httpService'

export const FetchProducts = () => {
    const http = new HttpService();
    const url = "api/products";
    return http.getData(url)
  };

export const AddFav = (productId) => {
    const http = new HttpService();
    const url = "api/products/favourites/"+productId;
    return http.putData(null,url)
  };

export const DeleteFav = (productId) => {
    const http = new HttpService();
    const url = "api/products/favourites/"+productId;
    return http.deleteData(url)
  };

  export const FetchFav = () => {
    const http = new HttpService();
    const url = "api/products/favourites";
    return http.getData(url)
  };

