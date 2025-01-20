import axios from 'axios';

const USERR_API_BASE_URL = "http://localhost:8080/api/v1/userr";
class UserSerivce {
    login(user){
        return axios.post(USERR_API_BASE_URL + '/login', user);
    }

    getUsers(){
        return axios.get(USERR_API_BASE_URL);
    }

    getUserById(employeeId){
        return axios.get(USERR_API_BASE_URL + '/' + employeeId);
    }

    createUser(employee){
        return axios.post(USERR_API_BASE_URL, employee);
    }


    updateUser(employee, employeeId){
        return axios.put(USERR_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteUser(employeeId){
        return axios.delete(USERR_API_BASE_URL + '/' + employeeId);
    }
}
export default new UserSerivce()