import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CI/CD Pipeline with Vishal Hello World!';
  }
}
