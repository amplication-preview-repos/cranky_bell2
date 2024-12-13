import { MonitoringData as TMonitoringData } from "../api/monitoringData/MonitoringData";

export const MONITORINGDATA_TITLE_FIELD = "id";

export const MonitoringDataTitle = (record: TMonitoringData): string => {
  return record.id?.toString() || String(record.id);
};
