import { BaseError } from "@/errors/BaseError";

export enum TaskBuilderErrorCode {
  usedVerbsEmpty,
}

export class TaskBuilderError extends BaseError<TaskBuilderErrorCode> {
  public name = "TaskBuilderError";
}
