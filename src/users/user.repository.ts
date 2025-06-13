import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) { }

  async getUser(email: string): Promise<User | null> {
    console.log(`Fetching user with email: ${email}`);
    const user = await this.userRepo.findOne({ where: { email } });
    console.log('User found:', user);
    return user;
  }
}
