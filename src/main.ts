import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import liquibaseRunner from './utils/liquibase-runner';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class validation pipe 추가
  app.useGlobalPipes(new ValidationPipe());

  // liquibase changelog 실행
  await liquibaseRunner.update(null);

  await app.listen(3000);
}
bootstrap();
