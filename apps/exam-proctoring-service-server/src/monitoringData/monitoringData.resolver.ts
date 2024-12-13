import * as graphql from "@nestjs/graphql";
import { MonitoringDataResolverBase } from "./base/monitoringData.resolver.base";
import { MonitoringData } from "./base/MonitoringData";
import { MonitoringDataService } from "./monitoringData.service";

@graphql.Resolver(() => MonitoringData)
export class MonitoringDataResolver extends MonitoringDataResolverBase {
  constructor(protected readonly service: MonitoringDataService) {
    super(service);
  }
}
