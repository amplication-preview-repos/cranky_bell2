import { Module } from "@nestjs/common";
import { ExamModuleBase } from "./base/exam.module.base";
import { ExamService } from "./exam.service";
import { ExamController } from "./exam.controller";
import { ExamResolver } from "./exam.resolver";

@Module({
  imports: [ExamModuleBase],
  controllers: [ExamController],
  providers: [ExamService, ExamResolver],
  exports: [ExamService],
})
export class ExamModule {}
