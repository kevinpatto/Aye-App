export interface AyeUser {
  app_metadata: AppMetadata;
  created_at: Date;
  email: string;
  email_verified: boolean;
  identities: Identity[];
  last_ip: string;
  last_login: Date;
  logins_count: number;
  name: string;
  nickname: string;
  picture: string;
  updated_at: Date;
  user_id: string;
  user_metadata: UserMetadata;
}

export interface AppMetadata {
  app: string;
}

export interface UserMetadata {
  seinfeld: string;
  profileCode: number;
  profilePicUrl: string;
  ayeUsername: string;
}

export interface Identity {
  connection: string;
  isSocial: boolean;
  provider: string;
  user_id: string;
}

