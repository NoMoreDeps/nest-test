import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { WwwController } from './www/www.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, WwwController],
  providers: [AppService],
})
export class AppModule {}
