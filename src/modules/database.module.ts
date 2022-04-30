import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const connectionModule = TypeOrmModule.forRootAsync({
  useFactory: () => {
    return {
      type: 'mysql',
      host: process.env.RDS_HOSTNAME,
      port: parseInt(process.env.RDS_PORT),
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      timezone: 'Z',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: false, // 변경 금지
      namingStrategy: new SnakeNamingStrategy(),
    };
  },
});

@Module({
  imports: [connectionModule],
  exports: [connectionModule],
})
export class DatabaseModule {
  public static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
    };
  }
}
