import { Goals } from './goals.model';

export interface MatchDetails {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}
