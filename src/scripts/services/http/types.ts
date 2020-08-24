import { CancelToken, ResponseType } from 'axios';

export type HttpRequest = {
  host?: string;
  responseType?: ResponseType;
  cookies?: string;
  cancelToken?: CancelToken;
};
