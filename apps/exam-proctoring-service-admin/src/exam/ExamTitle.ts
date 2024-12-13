import { Exam as TExam } from "../api/exam/Exam";

export const EXAM_TITLE_FIELD = "id";

export const ExamTitle = (record: TExam): string => {
  return record.id?.toString() || String(record.id);
};
