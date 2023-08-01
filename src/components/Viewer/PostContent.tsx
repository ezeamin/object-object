import Image from 'next/image';

import type { GrayMatterFile } from 'gray-matter';
import Markdown from 'markdown-to-jsx';

import TagList from '../Common/TagList';
import Code from './Code';
import AuthorName from '@/components/Common/AuthorName';

import { Post } from '@/interface';

import { lilita } from '@/styles/fonts';

interface Props {
  post: GrayMatterFile<string>;
  postMetadata: Post;
}

const PostContent = (props: Props) => {
  const { post, postMetadata } = props;

  const formattedDate = new Date(postMetadata.createdAt).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <section className="col-span-12 md:col-span-8 custom-card hide-borders-card viewer">
      {postMetadata.mainImageUrl && (
        <Image
          src={postMetadata.mainImageUrl}
          alt={postMetadata.title}
          width={750}
          height={350}
          className="main-image"
        />
      )}
      <div className="p-5 md:p-10 pb-0 md:pb-0">
        <div className="mb-4">
          <AuthorName
            author={postMetadata.author}
            size="large"
            textClassName="font-bold"
          >
            <p className="text-sm">Published on {formattedDate}</p>
          </AuthorName>
        </div>
        <h1 className={`my-2 main-title ${lilita.className}`}>
          {postMetadata.title}
        </h1>
        <TagList tags={postMetadata.tags} />
      </div>

      <article className="post-content p-5 md:p-10 pt-5 pb-5">
        <Markdown
          options={{
            overrides: {
              pre: {
                component: Code,
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </section>
  );
};
export default PostContent;
