import { AxiosInstance } from 'axios';
import { AuthData } from '../interfaces/interfaces';
import { instance } from '../instances/axios.instance';

export class AuthService {
	constructor(private readonly axios: AxiosInstance) {}

	async authenticate(data: AuthData) {
		try {
			const login = await this.axios.post('/auth', data);
			return login.data;
		} catch (error) {
			throw error;
		}
	}
}

export const authService = new AuthService(instance);
