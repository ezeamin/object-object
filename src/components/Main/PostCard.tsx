import Image from 'next/image';
import Link from 'next/link';

import { PostBasicInfo } from '@/interface';

interface Props {
  post: PostBasicInfo;
  index: number;
}

const PostCard = (props: Props) => {
  const { post, index } = props;

  if (index === 0) {
    return (
      <Link
        href="/"
        className="post-card card md:col-span-2 bg-base-100 shadow-xl image-full w-full h-72"
      >
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
          <section>
            <div className="flex items-center justify-center gap-2 mb-2">
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
            <h2 className="text-3xl font-bold text-center">{post.title}</h2>
          </section>
          <section className="flex flex-col md:flex-row items-center justify-between w-full mt-5">
            <div>
              <button
                type="button"
                className="btn btn-ghost flex items-center gap-2"
              >
                <i className="fa-regular fa-bookmark" />
                <p>SAVE</p>
              </button>
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
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="post-card card bg-base-100 shadow-xl w-full">
      <div className="card-body p-5 pb-3">
        <div className="grid grid-cols-12 gap-3 h-full">
          {post.mainImageUrl && (
            <section className="col-span-3 hidden md:block">
              <Image
                src={post.mainImageUrl}
                alt={post.title}
                width={200}
                height={300}
                className="h-full w-full object-cover rounded-2xl"
              />
            </section>
          )}
          <section
            className={`col-span-12 flex flex-col justify-between ${
              post.mainImageUrl && 'md:col-span-9'
            }`}
          >
            <section>
              <div className="flex items-center justify-center gap-2 mb-2  ">
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
              <h2 className="text-2xl font-bold">{post.title}</h2>
            </section>
            <section className="flex items-center justify-between w-full mt-5">
              <div>
                <button
                  type="button"
                  className="btn btn-ghost flex items-center gap-2 ps-0"
                >
                  <i className="fa-regular fa-bookmark" />
                  <p>SAVE</p>
                </button>
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
    </Link>
  );
};
export default PostCard;
