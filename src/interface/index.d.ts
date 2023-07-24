export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  mainImageUrl: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  categoryId: number;
  user: User;
  stats: Stats;
  tags: string[];
}

// CHANGE THIS
export interface User {
  authorId: number;
  name: string;
  avatarUrl: string;
}

export interface Stats {}

export interface PostBasicInfo {
  id: number;
  title: string;
  slug: string;
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
  tags: string[];
  timeToRead: number;
}
