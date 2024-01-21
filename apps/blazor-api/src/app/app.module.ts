import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { PrismaModule } from './prisma';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../../../.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
