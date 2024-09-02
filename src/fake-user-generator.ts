import { User } from './libs/models/index';
import { faker } from '@faker-js/faker';

export class FakeUserGenerator {
	constructor(
	) { }

	generateCustomer(): User {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
		address: {
			line1: faker.address.streetAddress(),
			line2: faker.address.streetAddress(),
			postcode: faker.address.zipCode(),
			city: faker.address.city(),
			state: faker.address.state(),
			country: faker.address.country(),
			
		},
		createdAt: faker.date.anytime()
    };
}

}