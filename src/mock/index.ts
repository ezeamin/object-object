import {
  /* Post, */
  Post,
} from '@/interface';

export const mockedPosts: Post[] = [
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
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 2,
    title: 'Retro games with Pico 8',
    slug: 'retro-games-with-pico-8',
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
    tags: ['retro', 'games'],
    timeToRead: 5,
    createdAt: new Date(2021, 5, 15),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 3,
    title: 'GPT-3 Generated Poetry',
    slug: 'gpt-3-generated-poetry',
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
    tags: ['GPT', 'IA'],
    timeToRead: 3,
    createdAt: new Date(2020, 11, 3),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 4,
    title: 'AWS Quickstart',
    slug: 'aws-quickstart',
    mainImageUrl:
      'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
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
    tags: ['server', 'amazon', 'cloud', 'aws'],
    timeToRead: 15,
    createdAt: new Date(2019, 1, 1),
    updatedAt: null,
    deletedAt: null,
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
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
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
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 7,
    title: 'Cooking Masterclass: The Art of Flavor',
    slug: 'cooking-masterclass-the-art-of-flavor',
    mainImageUrl:
      'https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg',
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
    tags: ['cooking', 'food'],
    timeToRead: 7,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 8,
    title: 'Re-resizable library',
    slug: 're-resizable',
    mainImageUrl:
      'https://github.com/bokuweb/re-resizable/blob/master/logo.png?raw=true',
    author: {
      authorId: 7,
      avatarUrl: 'https://picsum.photos/200',
      name: 'moklick',
    },
    stats: {
      comments: 25,
      views: 300,
      likes: 120,
    },
    tags: ['react', 'library', 'resizable'],
    timeToRead: 7,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
];

/*
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
};
*/
