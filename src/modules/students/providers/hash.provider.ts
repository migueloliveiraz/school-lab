import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';

@Injectable()
export class HashProvider {
  async generateHash(password: string) {
    const salt = await hash(password, 10);

    return salt;
  }

  async compareHash(password: string, hash: string) {
    const comparePassword = await compare(password, hash);

    if (!comparePassword) {
      throw new Error('Invalid password');
    }

    return comparePassword;
  }
}
