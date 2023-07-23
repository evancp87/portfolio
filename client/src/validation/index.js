import joi from "joi";
import { formSchema } from "./schema";

export const validate = async (payload) => {
  const form = joi.object(formSchema);

  try {
    const results = await form.validateAsync(payload, {
      abortEarly: false,
    });

    console.log(results);
    return null;
  } catch (error) {
    console.log(error);
    if (error.details) {
      // configures Joi's slightly unusual data structure to be more useful
      const errorsMod = error.details.map((error) => ({
        key: error.context.key,
        message: error.message,
      }));
      return errorsMod;
    }
    return [error.message];
  }
};
