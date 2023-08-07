import { Request, Response, NextFunction } from 'express';

const validLeadIdRegex = /^[0-9a-fA-F]{24}$/;

export const validateLeadIdFormat = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { leadId } = req.params;

	if (!validLeadIdRegex.test(leadId)) {
		return res.status(400).json({ error: 'Invalid leadId format' });
	}

	next();
};
