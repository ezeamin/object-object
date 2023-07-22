import Link from 'next/link';

interface Props {
  tags: string[];
}

const TagList = (props: Props) => {
  const { tags } = props;

  return (
    <ul className="-ms-2">
      {tags.map((tag) => (
        <li key={tag} className="inline">
          <Link
            href={`/tags/${tag}`}
            className="btn btn-ghost p-2 min-h-0 h-auto"
          >{`# ${tag}`}</Link>
        </li>
      ))}
    </ul>
  );
};
export default TagList;
