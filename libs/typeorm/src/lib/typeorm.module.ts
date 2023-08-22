import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { TypeOrmConfigModule, TypeOrmConfigService } from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      useFactory: async (configService: TypeOrmConfigService) => {
        const typeOrmConfig = configService.get();

        return {
          type: typeOrmConfig.TYPEORM_TYPE,
          host: typeOrmConfig.TYPEORM_HOST,
          port: typeOrmConfig.TYPEORM_PORT,
          username: typeOrmConfig.TYPEORM_USERNAME,
          password: typeOrmConfig.TYPEORM_PASSWORD,
          database: typeOrmConfig.TYPEORM_DATABASE,
          synchronize: typeOrmConfig.TYPEORM_SYNCHRONIZE,
          entities: [User],
        };
      },
      inject: [TypeOrmConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class TypeormModule {}
