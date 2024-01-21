import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          // url: 'postgresql://vickykatoch:secretpassword@localhost:5433/vectordb?schema=public',
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
