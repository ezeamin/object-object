import CreateForm from '@/components/Create/CreateForm';

import { lilita } from '@/styles/fonts';

const CreatePage = () => {
  return (
    <section className="responsive-paddings">
      <h1 className={`my-2 title ${lilita.className}`}>Create new post</h1>
      <hr />
      <CreateForm />
    </section>
  );
};

export default CreatePage;
