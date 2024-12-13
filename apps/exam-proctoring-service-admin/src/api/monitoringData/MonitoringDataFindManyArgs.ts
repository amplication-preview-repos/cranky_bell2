import { MonitoringDataWhereInput } from "./MonitoringDataWhereInput";
import { MonitoringDataOrderByInput } from "./MonitoringDataOrderByInput";

export type MonitoringDataFindManyArgs = {
  where?: MonitoringDataWhereInput;
  orderBy?: Array<MonitoringDataOrderByInput>;
  skip?: number;
  take?: number;
};
