import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import type { GrayMatterFile } from 'gray-matter';

import AuthorName from '@/components/Common/AuthorName';

import { Post } from '@/interface';

import { lilita } from '@/styles/fonts';

interface Props {
  post: GrayMatterFile<string>;
  postMetadata: Post;
}

const PostContent = (props: Props) => {
  const { post, postMetadata } = props;

  const formattedDate = new Date(post.data.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="col-span-12 md:col-span-8 custom-card viewer">
      <Image
        src={postMetadata.mainImageUrl}
        alt={postMetadata.title}
        width={750}
        height={350}
        className="main-image"
      />
      <div className="p-5">
        <div className="flex justify-between items-center">
          <AuthorName author={postMetadata.user} />
          <p className="">Published on {formattedDate}</p>
        </div>
        <h1 className={`text-5xl ${lilita.className}`}>{post.data.title}</h1>
      </div>

      <article className="post-content p-5 pt-2">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  );
};
export default PostContent;
