import { mockedUser } from '@/mock';

import SeeMoreUser from './SeeMoreUser';
import UserCard from './UserCard';

interface Props {
  authorId: number;
  postId: number;
}

const ViewerAside = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { authorId, postId } = props;

  // TODO: Search by ID
  const user = mockedUser;

  return (
    <aside className="col-span-12 md:col-span-4 flex flex-col md:gap-3 relative min-h-full">
      <UserCard user={user} />
      <SeeMoreUser user={user} postId={postId} />
    </aside>
  );
};
export default ViewerAside;
