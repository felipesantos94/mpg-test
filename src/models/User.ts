export interface User {
  id: string;
  name: string;
}

export interface CouchbaseUser extends User {
  type: 'user';
}