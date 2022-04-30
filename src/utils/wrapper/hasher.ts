import * as bcrypt from 'bcrypt';

const SALT = 10;

class Hasher {
  async hash(str: string): Promise<string> {
    return bcrypt.hash(str, SALT);
  }
}

export default new Hasher();
