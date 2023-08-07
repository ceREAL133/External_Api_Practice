export interface AuthData {
	email: string;
	password: string;
}

export interface LeadCreationData {
	affiliateId: string;
	firstname: string;
	lastname: string;
	email: string;
	phonenumber: string;
	countrycode: string;
	clickId: string;
	pixel: string;
	campaignId: string;
	password: string;
	offerId: string;
	comment: string;
	funnelname: string;
	funnellink: string;
}

export interface getLeadsData {
	fromDate: string;
	toDate: string;
}
