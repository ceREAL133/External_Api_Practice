import { Request, Response } from 'express';
import { authService as AuthService } from '../services/auth.service';
import { instance } from '../instances/axios.instance';

export const authenticate = async (req: Request, res: Response) => {
	try {
		const response = await AuthService.authenticate(req.body);

		instance.interceptors.request.use((config) => {
			config.headers['x-auth-token'] = response.token;
			return config;
		});

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: 'An error occurred' });
	}
};
