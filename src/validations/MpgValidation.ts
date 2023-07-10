import Joi from 'joi';
import { CouchbaseMpg } from '../models/Mpg';

const mpgSchema = Joi.object<CouchbaseMpg>({
  id: Joi.string().required(),
  name: Joi.string().required(),
  adminId: Joi.string().required(),
  description: Joi.string().required(),
  usersTeams: Joi.object().optional(),
  type: Joi.string().valid('mpg_league', 'mpg_team').optional(),
});

export default mpgSchema;
