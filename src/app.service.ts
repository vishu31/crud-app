import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App runs on port 8000, CI/CD Pipeline with Vishal Hello World!';
  }
}
