import { axiosPost, axiosGet, axiosPatch, axiosDelete } from '../utils/axios';

class ReqResAPI {
    register = async (data) => {
        this.res = axiosPost({ path : '/api/register', data : data});
        return this.res;
    }

    getAllUser = async () => {
        this.res = axiosGet({ path : '/api/users?page=2'});
        return this.res;
    }

    getSingleUser = async () => {
        this.res = axiosGet({ path : '/api/users/2'});
        return this.res;
    }

    dataPost = async () => {
        this.res = axiosPost({ path : '/api/users'})
        return this.res;
    }

    dataUpdate = async () => {
        this.res = axiosPatch({ path : '/api/users/2'});
        return this.res;
    }

    dataDelete = async () => {
        this.res = axiosDelete({ path : '/api/users/2'});
        return this.res;
    }
}

export default new ReqResAPI();