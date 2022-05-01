import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import liquibaseRunner from './utils/liquibase-runner';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class validation pipe 추가
  app.useGlobalPipes(new ValidationPipe());

  // liquibase changelog 실행
  await liquibaseRunner.update(null);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Simple Notice Board')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
