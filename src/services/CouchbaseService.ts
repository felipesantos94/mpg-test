import dotenv from 'dotenv';
import {
  Bucket,
  Cluster,
  Collection,
  connect,
  ConnectOptions
} from 'couchbase'

dotenv.config();

export class CouchbaseService {
  private static cluster: Cluster;
  private static bucket: Bucket;
  private static collection: Collection;

  public static async initialize(): Promise<void> {
    const clusterConnStr = process.env.CLUSTER_CONN_STR || '';
    const bucketName = process.env.COUCHBASE_BUCKET_NAME || '';

    const connectOptions: ConnectOptions = {
      username: process.env.COUCHBASE_USERNAME || '',
      password: process.env.COUCHBASE_PASSWORD || '',
    };

    this.cluster = await connect(clusterConnStr, connectOptions);
    this.bucket = this.cluster.bucket(bucketName);
    this.collection = this.bucket.defaultCollection();
  }

  public static getCluster(): Cluster {
    return this.cluster;
  }
  public static getBucket(): Bucket {
    return this.bucket;
  }
  public static getCollection(): Collection {
    return this.collection;
  }
}
