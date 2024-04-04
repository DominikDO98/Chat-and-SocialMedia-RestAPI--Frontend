export type PostEntity = {
  id: string;
  user_id: string;
  group_id?: string;
  title: string;
  text: string;
  picture?: Blob;
  attachment?: string;
  created_at: Date;
  type: number;
};

export type CommentEntity = {
  id: string;
  post_id: string;
  user_id: string;
  text: string;
  created_at: Date;
  picture?: Blob;
  attachment?: string;
};

export type LikeEntity = {
  id: string;
  post_id: string;
  user_id: string;
  created_at: Date;
};

export type EventEntity = {
  post_id: string;
  date: Date;
  lat: number;
  lon: number;
};
