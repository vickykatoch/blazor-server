import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class NewAmpsConnectionInfoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  url: string[];

  @IsNumber()
  @IsOptional()
  connectionTimeout?: number;

  @IsNumber()
  @IsOptional()
  reconnectAttempts?: number;

  @IsBoolean()
  @IsOptional()
  keepAlive?: boolean;
}
export class EditAmpsConnectionInfoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsOptional()
  url?: string[];

  @IsNumber()
  @IsOptional()
  connectionTimeout?: number;

  @IsNumber()
  @IsOptional()
  reconnectAttempts?: number;

  @IsBoolean()
  @IsOptional()
  keepAlive?: boolean;
}
export class AmpsConnectionInfo {
  name: string;
  url: string[];
  connectionTimeout: number;
  reconnectAttempts: number;
  keepAlive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
