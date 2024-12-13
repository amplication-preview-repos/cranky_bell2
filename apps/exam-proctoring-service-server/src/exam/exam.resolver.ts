import * as graphql from "@nestjs/graphql";
import { ExamResolverBase } from "./base/exam.resolver.base";
import { Exam } from "./base/Exam";
import { ExamService } from "./exam.service";

@graphql.Resolver(() => Exam)
export class ExamResolver extends ExamResolverBase {
  constructor(protected readonly service: ExamService) {
    super(service);
  }
}
