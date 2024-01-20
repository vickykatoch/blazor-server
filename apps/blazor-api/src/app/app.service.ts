import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService', { timestamp: true });
  getData(): { message: string } {
    this.logger.log('Hello API')
    return { message: 'Hello API' };
  }
}
