import { MatchDetails } from './match-details.model';
import { Team } from './team.model';

export interface Standing {
  all: MatchDetails;
  away: MatchDetails;
  description: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: MatchDetails;
  points: number;
  rank: number;
  status: string;
  team: Team;
  update: string;
}
