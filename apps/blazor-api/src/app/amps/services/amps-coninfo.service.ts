import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import {
  AmpsConnectionInfo,
  EditAmpsConnectionInfoDto,
  NewAmpsConnectionInfoDto,
} from '../dto';

const mapConInfo = (res) =>
  Array.isArray(res)
    ? res.map((r) => ({ ...r, url: r.url.split(',') }))
    : { ...res, url: res.url.split(',') };

@Injectable()
export class AmpsConnectionInfoService {
  private readonly logger = new Logger(AmpsConnectionInfoService.name);

  constructor(private prisma: PrismaService) {}

  createConnectionInfo(
    dto: NewAmpsConnectionInfoDto
  ): Promise<AmpsConnectionInfo> {
    this.logger.log(
      'New amps connection creation request received',
      JSON.stringify(dto)
    );
    return this.prisma.ampsConnection
      .create({
        data: {
          name: dto.name,
          url: dto.url.join(','),
          connectionTimeout: dto.connectionTimeout || 5000,
          reconnectAttempts: dto.reconnectAttempts || 5,
          keepAlive: dto.keepAlive ?? false,
        },
      })
      .then(mapConInfo);
  }

  async updateConnectionInfo(
    dto: EditAmpsConnectionInfoDto
  ): Promise<AmpsConnectionInfo> {
    const conInfo = await this.prisma.ampsConnection.findUnique({
      where: {
        name: dto.name,
      },
    });
    if (!conInfo) throw new ForbiddenException('Access to resources denied');

    return this.prisma.ampsConnection
      .update({
        where: {
          name: dto.name,
        },
        data: {
          ...dto,
          url: dto.url ? dto.url.join(',') : conInfo.url,
        },
      })
      .then(mapConInfo);
  }
  async deleteConnectionInfo(name: string) {
    const conInfo = await this.prisma.ampsConnection.findUnique({
      where: {
        name,
      },
    });
    if (!conInfo) throw new ForbiddenException('Access to resources denied');

    await this.prisma.ampsConnection.delete({
      where: {
        name,
      },
    });
  }
  getConnectionInfoList() {
    return this.prisma.ampsConnection.findMany({}).then(mapConInfo);
  }
  getConnectionInfoById(name: string) {
    return this.prisma.ampsConnection
      .findUnique({
        where: {
          name,
        },
      })
      .then(mapConInfo);
  }
}
