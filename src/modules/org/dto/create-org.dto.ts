import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
export class CreateOrgDto {
  @ApiProperty({ description: '租户ID', example: 1 })
  @IsNumber()
  @Min(1)
  tenant: number;

  @ApiProperty({ description: '上级组织ID', example: 0 })
  @IsNumber()
  @IsOptional()
  superior: number;

  @ApiProperty({ description: '组织类型', example: 'department' })
  @IsString()
  @IsNotEmpty()
  orgType: string;

  @ApiProperty({ description: '负责人ID', example: 1 })
  @IsNumber()
  @IsOptional()
  leader: number;

  @ApiProperty({ description: '组织名称', example: '研发中心' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
