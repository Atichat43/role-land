import { Module } from '@nestjs/common';
import { TypeOrmModule as _TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule, TypeOrmConfigService } from './config';
import { entities, subscribers } from './entities';

@Module({
  imports: [
    _TypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      useFactory: async (configService: TypeOrmConfigService) => {
        const typeOrmModuleOptions = configService.get();

        return { ...typeOrmModuleOptions, entities, subscribers };
      },
      inject: [TypeOrmConfigService],
    }),
    _TypeOrmModule.forFeature(entities),
  ],
})
export class TypeOrmModule {}
