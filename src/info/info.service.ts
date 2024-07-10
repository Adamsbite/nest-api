import { Injectable } from '@nestjs/common';

@Injectable()
export class InfoService {

    async postWriteUp(){
        return 'this is a post write up'
    }

    async getWriteup(){
        return 'this is a get write up'
    }

    async deleteWriteup(){
        return 'this is a delete write up'
    }

    async putWriteup(){
        return 'this is a put write up'
    }


}
