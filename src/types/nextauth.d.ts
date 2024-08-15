/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line unused-imports/no-unused-vars

import { DefaultUser } from 'next-auth';

interface IUser extends DefaultUser {
  id: string;
}
declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user: User & {
      id: string;
      name: string;
      email: string;
      avatar?: string | null | undefined;
      banner?: string | null | undefined;
    };
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
