import { Request, Response } from 'express';
import { depositsService as DepositsService } from '../services/deposits.service';

export const getDeposits = async (req: Request, res: Response) => {
	try {
		const { fromDate, toDate } = req.query;

		const response = await DepositsService.getDeposits(
			fromDate as string,
			toDate as string
		);

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: 'An error occurred' });
	}
};
