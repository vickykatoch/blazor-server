import { Test } from '@nestjs/testing';
import { AppAuthController } from './app-auth.controller';

describe('AppAuthController', () => {
  let controller: AppAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [AppAuthController],
    }).compile();

    controller = module.get(AppAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
