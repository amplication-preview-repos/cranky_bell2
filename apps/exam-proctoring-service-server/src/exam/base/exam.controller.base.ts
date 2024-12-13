/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ExamService } from "../exam.service";
import { ExamCreateInput } from "./ExamCreateInput";
import { Exam } from "./Exam";
import { ExamFindManyArgs } from "./ExamFindManyArgs";
import { ExamWhereUniqueInput } from "./ExamWhereUniqueInput";
import { ExamUpdateInput } from "./ExamUpdateInput";

export class ExamControllerBase {
  constructor(protected readonly service: ExamService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Exam })
  async createExam(@common.Body() data: ExamCreateInput): Promise<Exam> {
    return await this.service.createExam({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Exam] })
  @ApiNestedQuery(ExamFindManyArgs)
  async exams(@common.Req() request: Request): Promise<Exam[]> {
    const args = plainToClass(ExamFindManyArgs, request.query);
    return this.service.exams({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Exam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async exam(
    @common.Param() params: ExamWhereUniqueInput
  ): Promise<Exam | null> {
    const result = await this.service.exam({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Exam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateExam(
    @common.Param() params: ExamWhereUniqueInput,
    @common.Body() data: ExamUpdateInput
  ): Promise<Exam | null> {
    try {
      return await this.service.updateExam({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Exam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteExam(
    @common.Param() params: ExamWhereUniqueInput
  ): Promise<Exam | null> {
    try {
      return await this.service.deleteExam({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
