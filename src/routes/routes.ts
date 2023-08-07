import { Express } from 'express';
import { authenticate } from '../controllers/auth.controller';
import validateRequest from '../middlewares/validateRequest';
import { createUserSessionSchema } from '../schemas/auth.schema';

export default function routes(app: Express) {
	app.post('/auth', validateRequest(createUserSessionSchema), authenticate);
}
