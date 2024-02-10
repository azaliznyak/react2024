import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const launchService={
    getAll:()=>axiosService.get(urls.launches)
}

export {launchService}