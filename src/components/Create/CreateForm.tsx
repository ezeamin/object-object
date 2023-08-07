'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

/* eslint-disable jsx-a11y/label-has-associated-control */

const CreateForm = () => {
  const { register, handleSubmit: submitRHF } = useForm();

  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (value: string | undefined) => {
    if (value) setMarkdown(value);
    else setMarkdown('');
  };

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
          <div className="alert mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              You can toggle the preview window with the buttons of the top
              right corner of the editor.
            </span>
          </div>
          <MDEditor
            id="content"
            className="w-full"
            value={markdown}
            onChange={handleMarkdownChange}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
          />
        </fieldset>
      </div>
      <div className="text-center md:text-right">
        <button type="submit" className="btn btn-primary">
          Save and Publish
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
