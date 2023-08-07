import { object, string } from 'yup';

export const createUserSessionSchema = object({
	body: object({
		password: string()
			.required('Password is required')
			.min(6, 'Password is too short, should be 6 chars minimum'),
		email: string()
			.email('Must be a valid email')
			.required('Email is required'),
	}),
});
