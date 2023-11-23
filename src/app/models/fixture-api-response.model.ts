import { FixtureResponse } from './fixture-reponse.model';
import { Paging } from './paging.model';
import { Param } from './parameters.modal';

export interface FixtureApiResponse {
  get: string;
  parameters: Param;
  errors: [];
  results: number;
  paging: Paging;
  response: FixtureResponse[];
}
