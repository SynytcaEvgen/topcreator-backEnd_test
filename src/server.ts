import { Customer } from './libs/Interface/index';
import { faker } from '@faker-js/faker';
import { schema }from './db/models/customers.model'
import { anonymize } from './anonymize-string'
import mongoose from 'mongoose';

class FakeCustomersGenerator{
	constructor(
		private customer: any
	) {}
	private generateCustomer(): Customer {
    	return {
    	    firstName: faker.person.firstName(),
    	    lastName: faker.person.lastName(),
    	    email: faker.internet.email(),
			address: {
				line1: faker.location.streetAddress(),
				line2: faker.location.streetAddress(),
				postcode: faker.location.zipCode(),
				city: faker.location.city(),
				state: faker.location.state(),
				country: faker.location.country(),

			},
			createdAt: faker.date.anytime()
    	};
	}
	private async addCustomersToDB() {
	  const batchSize = Math.floor(Math.random() * 10) + 1;
	  const customers = [];

	  for (let i = 0; i < batchSize; i++) {
	    customers.push(this.generateCustomer());
	  }
	  await this.customer.insertMany(customers);
	  console.log(`${customers.length} customers added to DB`);
	}
	public startGeneratingCustomers() {
	  setInterval(async () => {
	    try {
	      await this.addCustomersToDB();
	    } catch (error) {
	      console.error('Error adding customes', error);
	    }
	  }, 200);
	}
}
const customer = mongoose.model('customers', schema, 'customers');
export const generateCustomers = new FakeCustomersGenerator(customer);
