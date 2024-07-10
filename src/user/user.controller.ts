import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { Response } from 'express';

@Controller('user')
export class userController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createCatDto,@Res()res:Response){
    await this.userService.create(createCatDto,res);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  } 
}

// export class userController {}
