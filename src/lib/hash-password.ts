import { compare, hash } from 'bcrypt';

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function comparePassword(
  providedPassword: string,
  hashedPassword: string
) {
  return await compare(providedPassword, hashedPassword);
}
