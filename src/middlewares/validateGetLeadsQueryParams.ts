import { Request, Response, NextFunction } from 'express';

const validateQueryParams = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { fromDate, toDate } = req.query;

	if (!fromDate || !toDate) {
		return res
			.status(400)
			.json({
				error: 'fromDate and toDate are required query parameters',
			});
	}

	next();
};

export default validateQueryParams;
