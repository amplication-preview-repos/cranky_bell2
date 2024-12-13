import { Module } from "@nestjs/common";
import { MonitoringDataModuleBase } from "./base/monitoringData.module.base";
import { MonitoringDataService } from "./monitoringData.service";
import { MonitoringDataController } from "./monitoringData.controller";
import { MonitoringDataResolver } from "./monitoringData.resolver";

@Module({
  imports: [MonitoringDataModuleBase],
  controllers: [MonitoringDataController],
  providers: [MonitoringDataService, MonitoringDataResolver],
  exports: [MonitoringDataService],
})
export class MonitoringDataModule {}
