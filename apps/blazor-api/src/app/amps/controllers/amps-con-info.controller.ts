import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Logger,
} from '@nestjs/common';

import { AmpsConnectionInfoService } from '../services';
import {
  AmpsConnectionInfo,
  EditAmpsConnectionInfoDto,
  NewAmpsConnectionInfoDto,
} from '../dto';

@Controller('/amps/con-info')
export class AmpsConInfoController {
  constructor(private conInfoService: AmpsConnectionInfoService) {}

  @Post()
  createConnectionInfo(
    @Body() dto: NewAmpsConnectionInfoDto
  ): Promise<AmpsConnectionInfo> {
    Logger.log('POST request received', 'AmpsConInfoController');
    return this.conInfoService.createConnectionInfo(dto);
  }

  @Patch()
  updateConnectionInfo(
    @Body() dto: EditAmpsConnectionInfoDto
  ): Promise<AmpsConnectionInfo> {
    return this.conInfoService.updateConnectionInfo(dto);
  }

  @Delete(':name')
  deleteConnectionInfo(@Param('name') name: string) {
    return this.conInfoService.deleteConnectionInfo(name).then(() => null);
  }

  @Get('all')
  getConInfoList(): Promise<AmpsConnectionInfo[]> {
    return this.conInfoService.getConnectionInfoList();
  }
  @Get(':name')
  getConInfoById(@Param('name') name: string): Promise<AmpsConnectionInfo[]> {
    return this.conInfoService.getConnectionInfoById(name);
  }
}
