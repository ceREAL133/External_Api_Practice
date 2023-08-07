import { Express } from 'express';
import { authenticate } from '../controllers/auth.controller';
import validateRequest from '../middlewares/validateRequest';
import { createUserSessionSchema } from '../schemas/auth.schema';
import { createNewLead, getLeads } from '../controllers/leads.controller';
import { createLeadSchema, getLeadsSchema } from '../schemas/lead.schema';
import validateQueryParams from '../middlewares/validateGetLeadsQueryParams';

export default function routes(app: Express) {
	app.post('/auth', validateRequest(createUserSessionSchema), authenticate);

	app.post('/leads', validateRequest(createLeadSchema), createNewLead);
	app.get(
		'/leads',
		validateQueryParams,
		validateRequest(getLeadsSchema),
		getLeads
	);
}
