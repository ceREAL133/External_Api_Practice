import { Request, Response } from 'express';
import 'dotenv/config';
import { service as AuthService } from '../services/auth.service';

export const authenticate = async (req: Request, res: Response) => {
	try {
		const response = await AuthService.authenticate(req.body);

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: 'An error occurred' });
	}
};
