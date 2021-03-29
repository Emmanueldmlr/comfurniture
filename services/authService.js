
import HttpService from './httpService'

export const Login = (payload) => {
    const http = new HttpService();
    const url = "accounts/admin/login/";
    return http.postData( payload, url)
        // .then((data) => data)
        // .catch((error) => error);
  };

  export const ChangePassword = (payload) => {
    const http = new HttpService();
    const url = "accounts/password-update/";
    return http.putData( url, payload)
        // .then((data) => data)
        // .catch((error) => error);
  };


  export const updateUserProfile = (formData, id) => {
    const http = new HttpService();
    const url = `accounts/admin/details/${id}/`;
    return http.putData(url, formData)
        // .then((data) => data)
        // .catch((error) => error);
  };

export const GetUserDetails = () => {
    const http = new HttpService();
    const url = "accounts/admin/details/";
    return http.getDataWithToken(url)
        // .then((data) => data)
        // .catch((error) => error);
}

export const RequestResetPassword = (payload)=> {
  const http = new HttpService();
    const url = "accounts/request-author-reset-email/";
    return http.postData( payload, url)
        // .then((data) => data)
        // .catch((error) => error);
}

export const ChangeUserPassword = (payload)=> {
  const http = new HttpService();
    const url = "accounts/author-password-reset-complete/";
    return http.putDataWithoutToken( payload, url)
        // .then((data) => data)
        // .catch((error) => error);
}