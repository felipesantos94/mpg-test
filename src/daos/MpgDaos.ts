import dotenv from 'dotenv';
import { Cluster } from 'couchbase';
import { CouchbaseService } from '../services/CouchbaseService';
import { CouchbaseMpg } from '../models/Mpg';

dotenv.config();
const bucketName = process.env.COUCHBASE_BUCKET_NAME || '';

export class MpgDao {
  private static cluster: Cluster;

  public static initialize(): void {
    this.cluster = CouchbaseService.getCluster();
  }

  public static async createMpgLeague(league: CouchbaseMpg): Promise<boolean> {
    const query = `
      INSERT INTO \`${bucketName}\`
      VALUES ('${league.id}', { 
        'id': $leagueId, 
        'name': $name, 
        'description': $description, 
        'adminId': $adminId 
      })`;

    const { meta } = await this.cluster.query(query, {
      parameters: {
        leagueId: league.id,
        name: league.name,
        description: league.description,
        adminId: league.adminId
      }
    });

    return meta.status === 'success';
  }

  public static async updateTeam(teamId: string, name: string): Promise<boolean> {
    const query = `UPDATE \`${bucketName}\` SET name = $1 WHERE id = $2`;
    const { meta } = await this.cluster.query(query, { parameters: [name, teamId] });

    return meta.status === 'success';
  }
}
