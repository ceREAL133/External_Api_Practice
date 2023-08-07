import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

const validateRequest =
	(schema: AnySchema) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validate({
				body: req.body,
			});

			return next();
		} catch (e: any) {
			console.error(e);

			return res.status(400).send(e.errors);
		}
	};

export default validateRequest;
