import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AmpsQueryInfoService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  createQueryInfo() {
    // return this.prisma.ampsQueryInfo.create({});
  }
  updateQueryInfo() {
    // return this.prisma.ampsQueryInfo.update({});
  }
  deleteQueryInfo() {
    // return this.prisma.ampsQueryInfo.delete({});
  }
  getQueryInfoList() {
    // return this.prisma.ampsQueryInfo.findMany({});
  }
  getQueryInfoById() {
    // return this.prisma.ampsQueryInfo.findUnique({});
  }
}
