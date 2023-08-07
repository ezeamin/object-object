'use client';

import { useForm } from 'react-hook-form';

// import MDEditor from '@uiw/react-md-editor';
// import rehypeSanitize from 'rehype-sanitize';

/* eslint-disable jsx-a11y/label-has-associated-control */

const CreateForm = () => {
  const { register, handleSubmit: submitRHF } = useForm();

  const handleSubmit = (data: unknown) => console.log(data);

  return (
    <form onSubmit={submitRHF(handleSubmit)}>
      <div className="grid grid-cols-12 gap-3 my-5">
        <fieldset className="form-control col-span-12 md:col-span-6">
          <label htmlFor="title" className="text-lg">
            Post title
          </label>
          <input
            id="title"
            className="input input-bordered w-full"
            {...register('title', { required: true })}
          />
        </fieldset>
        <fieldset className="form-control col-span-12 md:col-span-6">
          <label htmlFor="file" className="text-lg">
            Cover image (optional)
          </label>
          <input
            id="file"
            type="file"
            className="file-input input-bordered w-full"
            {...register('file')}
          />
        </fieldset>
        <fieldset className="form-control col-span-12">
          <label htmlFor="content" className="text-lg">
            Content
          </label>
          {/* <MDEditor
            id="content"
            className="w-full"
            value=""
            onChange={() => {}}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
            // {...register('content', { required: true })}
          /> */}
        </fieldset>
      </div>
    </form>
  );
};

export default CreateForm;
