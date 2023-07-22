import Image from 'next/image';
import Link from 'next/link';

import TagList from '../Common/TagList';
import SaveButton from './SaveButton';

import { PostBasicInfo } from '@/interface';

interface Props {
  post: PostBasicInfo;
  index: number;
}

const PostCard = (props: Props) => {
  const { post, index } = props;

  let emoji = '🐇';
  if (post.timeToRead > 5 && post.timeToRead <= 10) emoji = '🐢';
  else if (post.timeToRead > 10) emoji = '🐌';

  if (index === 0) {
    return (
      <div className="post-card card md:col-span-2 bg-base-100 shadow-xl image-full w-full h-72 hover:shadow-center-blue hover:border-white/20 transition-all duration-300">
        <figure>
          <Image
            src={post.mainImageUrl}
            alt={post.title}
            width={800}
            height={300}
            className="w-full h-d-full object-cover"
          />
        </figure>
        <div className="relative z-20 p-5 pb-3 w-full flex flex-col justify-end items-center">
          <Link href="/" className="w-full">
            <div className="flex items-center justify-center gap-2 mb-2">
              <figure>
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                  priority
                />
              </figure>
              <p>{post.author.name}</p>
            </div>
            <h2 className="text-3xl font-bold text-center">{post.title}</h2>
            <div className="flex justify-center">
              <TagList tags={post.tags} />
            </div>
          </Link>
          <section className="flex flex-col md:flex-row items-center justify-between w-full mt-5">
            <div className="flex flex-grow basis-0">
              <SaveButton id={post.id} />
            </div>
            <p className="text-center mb-1 md:mb-0">{`${emoji} ${post.timeToRead} min read`}</p>
            <div className="flex items-center justify-end gap-4 flex-grow basis-0">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-heart" />
                <p>{post.stats.likes}</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-eye" />
                <p>{post.stats.views}</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-comments" />
                <p>{post.stats.comments}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="post-card card bg-base-100 shadow-xl w-full border border-white/10 hover:shadow-center-blue hover:border-white/20 transition-all duration-300">
      <div className="card-body p-5 pb-4">
        <section className="flex flex-col justify-between">
          <Link href="/" className="w-full pb-9">
            <div className="flex justify-between items-center w-full mb-2">
              <div className="flex items-center justify-center gap-2 ">
                <figure>
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </figure>
                <p>{post.author.name}</p>
              </div>
              <p className="text-right">{`${emoji} ${post.timeToRead} min read`}</p>
            </div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <TagList tags={post.tags} />
          </Link>
          <section className="flex items-center justify-between w-full mt-1">
            <div>
              <SaveButton id={post.id} />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-heart" />
                <p>{post.stats.likes}</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-eye" />
                <p>{post.stats.views}</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-comments" />
                <p>{post.stats.comments}</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
export default PostCard;
