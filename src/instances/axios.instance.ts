import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';

export const instance: AxiosInstance = axios.create({
	baseURL: process.env.BASE_URL,
});
