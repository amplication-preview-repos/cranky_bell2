import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExamService } from "./exam.service";
import { ExamControllerBase } from "./base/exam.controller.base";

@swagger.ApiTags("exams")
@common.Controller("exams")
export class ExamController extends ExamControllerBase {
  constructor(protected readonly service: ExamService) {
    super(service);
  }
}
