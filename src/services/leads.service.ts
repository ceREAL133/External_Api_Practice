import { AxiosInstance } from 'axios';
import { LeadCreationData, Lead } from '../interfaces/interfaces';
import { instance } from '../instances/axios.instance';

export class LeadsService {
	constructor(private readonly axios: AxiosInstance) {}

	async createNewLead(data: LeadCreationData): Promise<Lead> {
		try {
			const newLead = await this.axios.post('/leads', data);
			return newLead.data;
		} catch (error) {
			throw error;
		}
	}

	async getLeads(fromDate: string, toDate: string): Promise<Lead[]> {
		try {
			const leads = await this.axios.get('/leads', {
				params: {
					fromDate,
					toDate,
				},
			});

			return leads.data;
		} catch (error) {
			throw error;
		}
	}

	async getSingleLead(leadId: string): Promise<Lead> {
		try {
			const lead = await this.axios.get(`/leads/single/${leadId}`);

			return lead.data;
		} catch (error) {
			throw error;
		}
	}
}

export const leadsService = new LeadsService(instance);
