import { z } from "zod";

// International phone regex
const PHONE_REGEX = /^\+?\d{10,14}$/;

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Please enter a valid first name"),
  lastName: z.string().trim().min(2, "Please enter a valid last name"),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Please enter a message of at least 10 characters"),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => !value || PHONE_REGEX.test(value),
      "Please enter a valid phone number"
    ),
});

export type ContactMessage = z.infer<typeof contactSchema>;

export default contactSchema;
