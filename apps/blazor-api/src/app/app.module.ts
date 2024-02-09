import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { PrismaModule } from './prisma';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user';
import { BookmarkModule } from './bookmark';
import { AmpsModule } from './amps';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../../../.env',
    }),
    UserModule,
    BookmarkModule,
    AmpsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
