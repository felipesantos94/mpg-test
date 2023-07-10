import dotenv from 'dotenv';
import { Cluster } from 'couchbase';
import { CouchbaseService } from '../services/CouchbaseService';

dotenv.config();
const bucketName = process.env.COUCHBASE_BUCKET_NAME || '';

export class UserDao {
  private static cluster: Cluster;

  public static async initialize(): Promise<void> {
    this.cluster = CouchbaseService.getCluster();
  }

  public static async getUserByLeagueId(id: string): Promise<Object[]> {
    const query = `
      SELECT u.name AS name
      FROM \`${bucketName}\` AS mpg_league
      UNNEST OBJECT_NAMES(mpg_league.usersTeams) AS user_id
      JOIN \`${bucketName}\` AS u ON META(u).id = user_id AND u.type = "user"
      WHERE META(mpg_league).id = $league_id
        AND mpg_league.type = "mpg_league"`;

    const { rows } = await this.cluster.query(query, { parameters: { league_id: id } });
    return rows;
  }
}
