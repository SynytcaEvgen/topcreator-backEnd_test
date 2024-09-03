import { Address } from './address.interface'

export interface Customer {
	firstName: string;
	lastName: string;
	email: string;
	address: Address;
	createdAt: Date;
}