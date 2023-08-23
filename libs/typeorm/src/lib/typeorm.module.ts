import { Module } from '@nestjs/common';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule, TypeOrmConfigService } from './config';
import { entities } from './entities';

@Module({
  imports: [
    _TypeOrmModule.forRootAsync({
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
          entities: entities,
        };
      },
      inject: [TypeOrmConfigService],
    }),
    _TypeOrmModule.forFeature(entities),
  ],
})
export class TypeOrmModule {}
