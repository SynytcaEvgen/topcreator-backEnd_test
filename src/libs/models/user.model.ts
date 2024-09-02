import { Address } from './address.model'

export class User {
	// _id: string;
	firstName: string;
	lastName: string;
	email: string;
	address: Address;
	createdAt: Date;
}