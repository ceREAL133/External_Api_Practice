import { AxiosInstance } from 'axios';
import { instance } from '../instances/axios.instance';

export class DepositsService {
	constructor(private readonly axios: AxiosInstance) {}

	async getDeposits(fromDate: string, toDate: string) {
		try {
			const deposits = await this.axios.get('/deposits', {
				params: {
					fromDate,
					toDate,
				},
			});

			return deposits.data;
		} catch (error) {
			throw error;
		}
	}
}

export const depositsService = new DepositsService(instance);
