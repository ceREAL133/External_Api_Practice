import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';
import { AuthData } from '../interfaces/interfaces';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: process.env.BASE_URL,
});

export class AuthService {
	private axios: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axios = axiosInstance;
	}

	async authenticate(data: AuthData) {
		try {
			const newData = await this.axios.post('/auth', data);
			return newData.data;
		} catch (error) {
			throw error;
		}
	}
}

export const service = new AuthService(axiosInstance);
