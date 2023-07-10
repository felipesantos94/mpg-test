import Joi from 'joi';
import { CouchbaseUser } from '../models/User';

const userSchema = Joi.object<CouchbaseUser>({
  id: Joi.string().required(),
  name: Joi.string().required(),
  type: Joi.string().valid('user').required(),
});

export default userSchema;
