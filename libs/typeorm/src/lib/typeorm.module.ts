import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user/user.entity';
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
          entities: [UserEntity],
        };
      },
      inject: [TypeOrmConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
})
export class TypeormModule {}
