import { BaseError } from "@/errors/BaseError";

export enum GameErrorCode {
  usedVerbsEmpty,
}

export class GameError extends BaseError<GameErrorCode> {
  public name = "GameError";
}
