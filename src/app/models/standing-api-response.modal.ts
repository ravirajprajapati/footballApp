import { League } from './league.model';
import { Paging } from './paging.model';
import { Param } from './parameters.modal';

export interface StandingApiResponse {
  get: string;
  parameters: Param;
  errors: [];
  results: number;
  paging: Paging;
  response: League[];
}
