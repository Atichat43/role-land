import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user/user.entity';
import { users } from '../entities/user/user.seed';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async seed() {
    await this.userRepository.clear();
    await this.userRepository.save(users);
  }
}
