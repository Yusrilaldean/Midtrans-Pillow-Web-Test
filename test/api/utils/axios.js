import axios from 'axios';

const URL = 'https://reqres.in';

export const axiosPost = async ({ path, data, token }) => {
   try {    
        const res = axios.post(URL + path, data, {
            Authorization: `bearer ${token}`,
        });
        return res;
   } catch (error) {
        console.log(error.toJSON());
        if (error.response) {
            console.log(
                `Error Response: ${JSON.stringify(error.response.data)}`,
            );
            return error.response;
        }
   }
}

export const axiosGet = async ({ path, token }) => {
    try {    
        const res = axios.get(URL + path, {
            Authorization: `bearer ${token}`,
        });
        return res;
   } catch (error) {
        console.log(error.toJSON());
        if (error.response) {
            console.log(
                `Error Response: ${JSON.stringify(error.response.data)}`,
            );
            return error.response;
        }
   }
}

export const axiosPatch = async ({ token, path, data }) => {
    try {    
        const res = axios.patch(URL + path, data, {
            Authorization: `bearer ${token}`,
        });
        return res;
   } catch (error) {
        console.log(error.toJSON());
        if (error.response) {
            console.log(
                `Error Response: ${JSON.stringify(error.response.data)}`,
            );
            return error.response;
        }
   }
}
