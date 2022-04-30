import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import liquibaseRunner from './utils/liquibase-runner';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // liquibase changelog 실행
  await liquibaseRunner.update(null);

  await app.listen(3000);
}
bootstrap();
