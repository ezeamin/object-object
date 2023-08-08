import { getServerSession } from 'next-auth';

import { authOptions } from '@/utils/authOptions';

import CreateForm from '@/components/Create/CreateForm';

import { SessionInterface } from '@/interface';

import { lilita } from '@/styles/fonts';

const CreatePage = async () => {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return (
    <section className="responsive-paddings">
      <h1 className={`my-2 title ${lilita.className}`}>Create new post</h1>
      <hr />
      <CreateForm type="create" session={session} />
    </section>
  );
};

export default CreatePage;
