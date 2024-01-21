import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { PrismaModule } from './prisma';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user';
import { BookmarkModule } from './bookmark';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
