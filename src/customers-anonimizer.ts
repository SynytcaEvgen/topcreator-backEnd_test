import { Customer } from './libs/Interface/index';
import { faker } from '@faker-js/faker';
import { schema }from './db/models/customers.model'
import { anonymize } from './anonymize-string'
import mongoose from 'mongoose';

class CustomersAnonymizer{
	constructor(
		private customer: any,
		private customerAnonymised: any
	) {}
	public changeWatcher() { 
		this.customer.watch().on('change', async (data: any) => { 
			const docum = data.fullDocument;
			docum.firstName = anonymize.anonymizeString(docum.firstName)
			docum.lastName = anonymize.anonymizeString(docum.lastName)
			const email = docum.email.split('@');
			docum.email = `${anonymize.anonymizeString(email[0])}@${email[1]}`
			docum.address.line1 = anonymize.anonymizeString(docum.address.line1)
			docum.address.line2 = anonymize.anonymizeString(docum.address.line2)
			docum.address.postcode = anonymize.anonymizeString(docum.address.postcode)
			await this.customerAnonymised.insertMany(docum);
		})
	}

}
const customer = mongoose.model('customers', schema, 'customers');
const customerAnonymised = mongoose.model('customers_anonymised', schema, 'customers_anonymised');
export const customersAnonymizer = new CustomersAnonymizer(customer, customerAnonymised);