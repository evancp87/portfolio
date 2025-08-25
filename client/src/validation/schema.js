import joi from 'joi';

export const formSchema = {
  email: joi
    .string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: false } }),
  name: joi.string().trim().min(1).max(40),
  message: joi.string().trim().min(1).max(40),
};
