import Image from 'next/image';

import type { GrayMatterFile } from 'gray-matter';
import Markdown from 'markdown-to-jsx';

import AuthorName from '@/components/Common/AuthorName';

import { Post } from '@/interface';

interface Props {
  post: GrayMatterFile<string>;
  postMetadata: Post;
}

const PostContent = (props: Props) => {
  const { post, postMetadata } = props;

  return (
    <section className="col-span-12 md:col-span-8 custom-card">
      <div>
        <AuthorName author={postMetadata.user} />
        <h1 className="text-5xl">{post.data.title}</h1>
        <p className=" mt-2">{post.data.date}</p>
        <Image
          src={postMetadata.mainImageUrl}
          alt={postMetadata.title}
          width={500}
          height={250}
        />
      </div>

      <article className="">
        <Markdown>{post.content}</Markdown>
      </article>
    </section>
  );
};
export default PostContent;
