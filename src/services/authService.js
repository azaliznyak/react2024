import {apiService} from "./apiService";
import {urls} from "../constants";

const tokenKey='token'
const authService={
    setToken(token){
        localStorage.setItem(tokenKey, token)
    },

    getToken(){
        return localStorage.getItem(tokenKey)
    },

    deleteToken(){
        localStorage.removeItem(tokenKey)
    },

    register(data){
        return apiService.post(urls.auth.register, data)
    },
    async login (user){
        const{data:{access}}= await apiService.post(urls.auth.login, user)            //отримуємо респонс витягуємо data з дати деструктуризуємо access token і сетамо його
        this.setToken(access)

    },
    me(){
        return apiService.get(urls.auth.me)
    }

}

export {
    authService
}