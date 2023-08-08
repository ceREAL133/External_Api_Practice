enum CountryCode {
	US = 'US',
	CA = 'CA',
	AU = 'AU',
}

enum LeadStatus {
	Success = 'Success',
	AlreadyExist = 'Already Exists',
	Failure = 'Failure',
}

enum Curency {
	Dollar = '$',
	Euro = '€',
}
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
	countrycode: CountryCode;
	clickId: string;
	pixel: string;
	campaignId: string;
	password: string;
	offerId: string;
	comment: string;
	funnelname: string;
	funnellink: string;
}

export interface loginData {
	token: string;
}

export interface Lead
	extends Omit<
		LeadCreationData,
		'funnelname' | 'funnellink' | 'password' | 'offerId' | 'comment'
	> {
	_id: string;
	date: Date;
	statusdate: Date;
	status: LeadStatus;
	brandId: string;
	brandstatus: string;
	brandstatusdate: Date;
	branduserid: string;
	autologinUrl: string;
}

export interface Deposit {
	_id: string;
	lead: Lead;
	date: Date;
	price: string;
	currency: Curency;
	ftdamount: string;
	affiliateId: string;
	networkId: string;
}
