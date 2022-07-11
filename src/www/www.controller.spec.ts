import { Test, TestingModule } from '@nestjs/testing';
import { WwwController } from './www.controller';

describe('WwwController', () => {
  let controller: WwwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WwwController],
    }).compile();

    controller = module.get<WwwController>(WwwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
