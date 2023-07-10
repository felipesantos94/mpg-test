export interface Mpg {
  id: string;
  name: string;
  adminId: string;
  description: string;
  usersTeams?: { [userId: string]: string };
}

export interface CouchbaseMpg extends Mpg {
  type: 'mpg_league' | 'mpg_team';
}