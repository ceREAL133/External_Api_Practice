import { Express } from 'express';
import { authenticate } from '../controllers/auth.controller';
import validateRequest from '../middlewares/validateRequest';
import { createUserSessionSchema } from '../schemas/auth.schema';
import {
	createNewLead,
	getLeads,
	getSingleLead,
} from '../controllers/leads.controller';
import { createLeadSchema, getLeadsSchema } from '../schemas/lead.schema';
import { getDeposits } from '../controllers/deposits.controller';
import { validateLeadIdFormat } from '../middlewares/validateLeadIdFormat';

export default function routes(app: Express) {
	app.post('/auth', validateRequest(createUserSessionSchema), authenticate);

	app.post('/leads', validateRequest(createLeadSchema), createNewLead);
	app.get('/leads', validateRequest(getLeadsSchema), getLeads);
	app.get('/leads/single/:leadId', validateLeadIdFormat, getSingleLead);

	app.get('/deposits', getDeposits);
}
