import { FixtureLeague } from './fixture-league.model';
import { FixtureTeams } from './fixture-teams.model';
import { Fixture } from './fixture.model';
import { HomeAway } from './home-away.modal';
import { Score } from './score.model';

export interface FixtureResponse {
  fixture: Fixture;
  league: FixtureLeague;
  teams: FixtureTeams;
  goals: HomeAway;
  score: Score;
}
