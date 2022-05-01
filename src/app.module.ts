import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './domains/comment/comment.module';
import { PostModule } from './domains/post/post.module';
import { DatabaseModule } from './modules/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, PostModule, CommentModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
