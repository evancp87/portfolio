import joi from "joi";

const customEmailError = "Invalid email address format";

export const formSchema = {
  email: joi
    .string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: false } }),
  name: joi.string().trim().min(1).max(40),
  message: joi.string().trim().min(1).max(40),
};
