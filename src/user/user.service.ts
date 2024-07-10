import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { Response } from 'express';

@Injectable()
export class UserService {
  private readonly user: User[] = [];

  create(user: User,res: Response) {
    this.user.push(user);
    return res.send("User created successfully")
  }

  findAll(): User[] {
    return this.user;
  }
}
