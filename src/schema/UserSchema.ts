import { z } from 'zod';

export const UserSchema = {
  id: '',
  name: '',
  email: '',
  gender: '',
  status: '',
};

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  gender: z.string(),
  status: z.string(),
});

export type ValidationInputUserSchemaType = z.infer<typeof CreateUserSchema>;
