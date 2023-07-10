import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

function schemaValidation(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    req.body = {
      ...req.body,
      validatedData: value, // Attach the validated data to the request object without overwriting the original body
    };
    next();
  };
};

export { schemaValidation }