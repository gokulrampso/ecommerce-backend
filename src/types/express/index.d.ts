import { User } from '../../user/user.schema';

declare global {
  namespace Express {
    interface User {
      userId: string;
      email: string;
      roles: string[];
    }
    interface Request {
      user?: User;
    }
  }
}