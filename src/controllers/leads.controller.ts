import { Request, Response } from 'express';
import { leadsService as LeadsService } from '../services/leads.service';

export const createNewLead = async (req: Request, res: Response) => {
	try {
		const response = await LeadsService.createNewLead(req.body);

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: 'An error occurred' });
	}
};

export const getLeads = async (req: Request, res: Response) => {
	try {
		const { fromDate, toDate } = req.query;

		const response = await LeadsService.getLeads(
			fromDate as string,
			toDate as string
		);

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: 'An error occurred' });
	}
};

export const getSingleLead = async (req: Request, res: Response) => {
	try {
		const { leadId } = req.params;

		const response = await LeadsService.getSingleLead(leadId);

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: 'An error occurred' });
	}
};
