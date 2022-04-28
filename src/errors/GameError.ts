import { BaseError } from "./BaseError";

export enum GameErrorCode {
  usedVerbsEmpty,
}

export class GameError extends BaseError<GameErrorCode> {
  public name = "GameError";
}
