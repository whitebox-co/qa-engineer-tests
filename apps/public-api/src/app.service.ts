import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World From the Whitebox QA Engineer REST API! 
    <br/>
    Use <a href="http://localhost:3002/api">http://localhost:3002/api</a> to view the SwaggerUI Docs`;
  }
}
