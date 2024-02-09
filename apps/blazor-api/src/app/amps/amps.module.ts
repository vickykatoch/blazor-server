import { Module } from '@nestjs/common';
import { AmpsConnectionInfoService } from './services';
import { AmpsConInfoController } from './controllers';

@Module({
  imports: [],
  providers: [AmpsConnectionInfoService],
  controllers: [AmpsConInfoController],
})
export class AmpsModule {}
