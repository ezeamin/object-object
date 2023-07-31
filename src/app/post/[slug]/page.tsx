import { mockedPosts } from '@/mock';
import fs from 'fs';
import matter from 'gray-matter';

import PostContent from '@/components/Viewer/PostContent';
import ViewerAside from '@/components/Viewer/ViewerAside';

import '@/styles/viewer.css';

// export const generateStaticParams = async () => {
//   const posts = await fetch('https://.../posts').then((res) => res.json());
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

interface Props {
  params: {
    slug: string;
  };
}

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  const data = mockedPosts.find((post) => post.slug === slug)!;

  return { post: matterResult, postMetadata: data };
};

const PostPage = (props: Props) => {
  const {
    params: { slug },
  } = props;

  const { post, postMetadata } = getPostContent(slug);

  return (
    <section className="paddings grid grid-cols-12 w-full gap-3">
      <PostContent post={post} postMetadata={postMetadata} />
      <ViewerAside />
    </section>
  );
};
export default PostPage;
