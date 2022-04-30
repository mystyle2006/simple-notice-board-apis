import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './domains/post/post.module';
import { DatabaseModule } from './modules/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
