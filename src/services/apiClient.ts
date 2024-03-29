import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import { localStorageService } from "./localStorageService";

export const API = {

  PAGE_SIZE: 10,

  createClient(headers: object = {}): AxiosInstance {
    const axiosConfig: CreateAxiosDefaults = {
      baseURL: process.env.REACT_APP_API_URL,
    };

    const user = localStorageService.getUser();
    const defaultHeaders = user ? { "Authorization": `Bearer ${ user.token }` } : {};
    axiosConfig.headers = { ...defaultHeaders, ...headers };

    return axios.create(axiosConfig);
  },

};
