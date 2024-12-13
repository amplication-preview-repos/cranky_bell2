import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExamServiceBase } from "./base/exam.service.base";

@Injectable()
export class ExamService extends ExamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
