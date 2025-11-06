import {
  RESPONSE_SUCCESS_CODE,
  RESPONSE_CODE_MSG_MAP,
} from '@/common/constant';

export class ResOp<T> {
  constructor(
    private readonly code: number,
    private readonly data?: T,
    private readonly msg?: string,
  ) {}

  static success<T>(data: T, message?: string): ResOp<T> {
    return new ResOp(
      RESPONSE_SUCCESS_CODE,
      data,
      message || RESPONSE_CODE_MSG_MAP[200],
    );
  }
}
