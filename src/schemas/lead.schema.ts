import { object, string } from 'yup';

const validCountryCodes = ['AU', 'US', 'GB'];

export const createLeadSchema = object({
	body: object({
		affiliateId: string()
			.min(4, 'Id must be 4 digits long')
			.max(4, 'Id must be 4 digits long')
			.required(),
		firstname: string().required(),
		lastname: string().required(),
		email: string()
			.email('Must be a valid email')
			.required('Email is required'),
		phonenumber: string()
			.matches(/^\+\d{11}$/, 'Invalid phone number format')
			.required(),
		countrycode: string().oneOf(validCountryCodes, 'Invalid country code'),
		clickId: string().nullable(),
		pixel: string().nullable(),
		campaignId: string().required(),
		password: string()
			.required('Password is required')
			.min(6, 'Password is too short, should be 6 chars minimum'),
		offerId: string().nullable(),
		comment: string().nullable(),
		funnelname: string().nullable(),
		funnellink: string().nullable(),
	}),
});

export const getLeadsSchema = object({
	body: object({
		fromDate: string().matches(
			/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{2})$/,
			'Invalid date format'
		),
		toDate: string().matches(
			/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{2})$/,
			'Invalid date format'
		),
	}),
});
