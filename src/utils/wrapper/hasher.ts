import * as bcrypt from 'bcrypt';

const SALT = 10;

class Hasher {
  async hash(str: string): Promise<string> {
    return bcrypt.hash(str, SALT);
  }

  async isMatch(str: string, hashedStr: string): Promise<boolean> {
    return bcrypt.compare(str, hashedStr);
  }
}

export default new Hasher();
