import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InfoService } from './info.service';
import { request } from 'http';
 
@Controller('info')
export class InfoController {
    constructor(private infoservice:InfoService){}

    @Post('post')
    async request(){
        return await this.infoservice.postWriteUp()
    }

    @Get('post')
    async get(){
        return await this.infoservice.getWriteup()
    }

    @Delete('post')
    async delete(){
        return await this.infoservice.deleteWriteup()
    }

    @Put('post')
    async put(){
        return await this.infoservice.putWriteup()
    }

}
