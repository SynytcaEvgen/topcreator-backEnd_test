import * as mongoose from 'mongoose';


const addressShema = new mongoose.Schema({
  line1: {
    type: mongoose.Schema.Types.String,
    default: null,
  },
  line2: {
    type: mongoose.Schema.Types.String,
    default: null,
  },
  postcode: {
    type: mongoose.Schema.Types.String,
    default: null,
  },
  city: {
    type: mongoose.Schema.Types.String,
    default: null,
  },
  state: {
    type: mongoose.Schema.Types.String,
    default: null,
  },
  country: {
    type: mongoose.Schema.Types.String,
    default: null,
  },
  
}, {_id: false});

export const schema = new mongoose.Schema(
	{
		firstName: {
			type: mongoose.SchemaTypes.String,
			default: null,
		},
		lastName: {
			type: mongoose.SchemaTypes.String,
			default: null,
		},
		email: {
			type: mongoose.SchemaTypes.String,
			required: true,
		},
		address: addressShema,
		createdAt: {
			type: mongoose.SchemaTypes.Date,
			default: Date.now,
		}
	}
);