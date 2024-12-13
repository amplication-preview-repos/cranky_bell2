import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MonitoringDataServiceBase } from "./base/monitoringData.service.base";

@Injectable()
export class MonitoringDataService extends MonitoringDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
