import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MonitoringDataService } from "./monitoringData.service";
import { MonitoringDataControllerBase } from "./base/monitoringData.controller.base";

@swagger.ApiTags("monitoringData")
@common.Controller("monitoringData")
export class MonitoringDataController extends MonitoringDataControllerBase {
  constructor(protected readonly service: MonitoringDataService) {
    super(service);
  }
}
