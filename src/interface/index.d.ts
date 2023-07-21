export interface Post {
  id: number;
  title: string;
  content: string;
  mainImageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  categoryId: number;
  user: User;
  stats: Stats;
}

export interface User {}

export interface Stats {}

export interface PostBasicInfo {
  id: number;
  title: string;
  mainImageUrl: string;
  author: {
    authorId: number;
    name: string;
    avatarUrl: string;
  };
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}
