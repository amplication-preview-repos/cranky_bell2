import { ExamWhereInput } from "./ExamWhereInput";
import { ExamOrderByInput } from "./ExamOrderByInput";

export type ExamFindManyArgs = {
  where?: ExamWhereInput;
  orderBy?: Array<ExamOrderByInput>;
  skip?: number;
  take?: number;
};
