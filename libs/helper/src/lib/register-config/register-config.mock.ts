import { IsEnum, IsNumber, IsString } from 'class-validator';

enum EDatabaseType {
  Postgres = 'postgres',
  Mysql = 'mysql',
}

export class MockConfigObj {
  @IsEnum(EDatabaseType)
  type: EDatabaseType;

  @IsString()
  host: string;

  @IsNumber()
  port: number;
}
