// export interface Post {
//   id: number;
//   title: string;
//   slug: string;
//   content: string;
//   mainImageUrl: string;
//   createdAt: Date;
//   updatedAt: Date | null;
//   deletedAt: Date | null;
//   categoryId: number;
//   author: User;
//   stats: Stats;
//   tags: string[];
// }

// CHANGE THIS
export interface User {
  authorId: number;
  name: string;
  avatarUrl: string;
}

export interface Stats {
  views: number;
  likes: number;
  comments: number;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  mainImageUrl: string;
  author: User;
  stats: Stats;
  tags: string[];
  timeToRead: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
