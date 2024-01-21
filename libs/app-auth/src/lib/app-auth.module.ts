import { Module } from '@nestjs/common';
import { AppAuthController } from './app-auth.controller';

@Module({
  controllers: [AppAuthController],
  providers: [],
  exports: [],
})
export class AppAuthModule {}
