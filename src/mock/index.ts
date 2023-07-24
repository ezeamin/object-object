import { Post, PostBasicInfo } from '@/interface';

export const mockedPosts: PostBasicInfo[] = [
  {
    id: 1,
    title: 'Mario runs after Princess, again...',
    slug: 'mario-runs-after-princess-again',
    mainImageUrl:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/11/super-mario-bros-pelicula-2887174.jpg',
    author: {
      authorId: 1,
      avatarUrl: 'https://picsum.photos/200',
      name: 'John Doe',
    },
    stats: {
      comments: 10,
      views: 100,
      likes: 50,
    },
    tags: ['mario', 'princess', 'bowser'],
    timeToRead: 2,
  },
  {
    id: 2,
    title: 'Post 2',
    slug: 'post-2',
    mainImageUrl: '',
    author: {
      authorId: 1,
      avatarUrl: 'https://picsum.photos/200',
      name: 'John Doe',
    },
    stats: {
      comments: 10,
      views: 100,
      likes: 5,
    },
    tags: ['mario', 'princess', 'bowser'],
    timeToRead: 5,
  },
  {
    id: 3,
    title: 'A new adventure awaits our hero!',
    slug: 'a-new-adventure-awaits-our-hero',
    mainImageUrl:
      'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
    author: {
      authorId: 2,
      avatarUrl: 'https://picsum.photos/200',
      name: 'Jane Smith',
    },
    stats: {
      comments: 15,
      views: 200,
      likes: 70,
    },
    tags: ['mario', 'princess', 'bowser'],
    timeToRead: 3,
  },
  {
    id: 4,
    title: 'The Enigma of the Lost City',
    slug: 'the-enigma-of-the-lost-city',
    mainImageUrl:
      'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg',
    author: {
      authorId: 3,
      avatarUrl: 'https://picsum.photos/200',
      name: 'Michael Johnson',
    },
    stats: {
      comments: 5,
      views: 50,
      likes: 15,
    },
    tags: ['mario', 'princess', 'bowser'],
    timeToRead: 15,
  },
  {
    id: 5,
    title: 'The Science of Tomorrow',
    slug: 'the-science-of-tomorrow',
    mainImageUrl:
      'https://cdn.mos.cms.futurecdn.net/000b8723c68322d3eb871f467e4c23ce.jpg',
    author: {
      authorId: 4,
      avatarUrl: 'https://picsum.photos/200',
      name: 'Emily Williams',
    },
    stats: {
      comments: 20,
      views: 150,
      likes: 100,
    },
    tags: ['mario', 'princess', 'bowser'],
    timeToRead: 5,
  },
  {
    id: 6,
    title: 'The Galaxy Awaits: A Space Odyssey',
    slug: 'the-galaxy-awaits-a-space-odyssey',
    mainImageUrl:
      'https://cdn.mos.cms.futurecdn.net/0000e0bf314c7e9a56b21501f5a1e1db.jpg',
    author: {
      authorId: 5,
      avatarUrl: 'https://picsum.photos/200',
      name: 'David Lee',
    },
    stats: {
      comments: 8,
      views: 75,
      likes: 30,
    },
    tags: ['mario', 'princess', 'bowser'],
    timeToRead: 25,
  },
  {
    id: 7,
    title: 'Cooking Masterclass: The Art of Flavor',
    slug: 'cooking-masterclass-the-art-of-flavor',
    mainImageUrl:
      'https://cdn.mos.cms.futurecdn.net/000b49dd3c91b2e6123b537de0cd3158.jpg',
    author: {
      authorId: 6,
      avatarUrl: 'https://picsum.photos/200',
      name: 'Sarah Anderson',
    },
    stats: {
      comments: 25,
      views: 300,
      likes: 120,
    },
    tags: ['mario', 'princess', 'bowser'],
    timeToRead: 7,
  },
];

export const mockedPost: Post = {
  id: 1,
  title: 'Mario runs after Princess, again...',
  slug: 'mario-runs-after-princess-again',
  content: '',
  mainImageUrl:
    'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/11/super-mario-bros-pelicula-2887174.jpg',
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
  categoryId: 1,
  user: {
    authorId: 1,
    avatarUrl: 'https://picsum.photos/200',
    name: 'John Doe',
  },
  stats: {
    comments: 10,
    views: 100,
    likes: 50,
  },
  tags: ['mario', 'princess', 'bowser'],
};
