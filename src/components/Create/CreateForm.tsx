'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  /* createNewProject, */
  fetchToken,
} from '@/utils/actions';
import {
  PostFormSchema,
  postFormSchema,
} from '@/utils/forms/schemas/postFormSchema';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import useZodForm from '@/hooks/useZodForm';

import FileInput from '../Common/Form/FileInput';
import TextInput from '../Common/Form/TextInput';
import LoadingBackdrop from '../Common/LoadingBackdrop';

import { SessionInterface } from '@/interface';

interface Props {
  type: 'create' | 'edit';
  session: SessionInterface;
  // project?: ProjectInterface;
}

const CreateForm = (props: Props) => {
  const { type, session /* , project */ } = props;

  // ------------------------------------------------------------
  // HOOKS
  // ------------------------------------------------------------

  const { control, onSubmitMiddleware } = useZodForm(postFormSchema);

  // theme is needed for manually setting data-color-mode attr for MDEditor
  const { theme } = useTheme();

  const router = useRouter();

  // ------------------------------------------------------------
  // STATE
  // ------------------------------------------------------------

  const [markdown, setMarkdown] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ------------------------------------------------------------
  // HANDLERS
  // ------------------------------------------------------------

  const handleMarkdownChange = (value: string | undefined) => {
    if (value) setMarkdown(value);
    else setMarkdown('');
  };

  // TODO: Test submit method
  const handleSubmit = async (data: PostFormSchema) => {
    setIsSubmitting(true);

    const { token } = await fetchToken();

    const form: PostFormSchema = {
      ...data,
      content: markdown,
    };

    try {
      if (type === 'create') {
        // eslint-disable-next-line no-console
        console.log(form, session, token);

        // await createNewProject(form, session?.user?.id, token);

        router.push('/');
      } /* else if (type === 'edit' && project) {
        await updateProject(form, project.id, token);

        router.push('/');
      } */
    } catch (error) {
      // console.log(error);
      // alert('Something went wrong, please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // JSX
  // ------------------------------------------------------------

  return (
    <>
      {isSubmitting && <LoadingBackdrop />}
      <form onSubmit={onSubmitMiddleware(handleSubmit)}>
        <div className="grid grid-cols-12 gap-3 my-5">
          <TextInput<PostFormSchema>
            control={control}
            name="title"
            label="Post title"
            className="col-span-12 md:col-span-6"
          />
          <FileInput<PostFormSchema>
            control={control}
            name="coverImage"
            label="Cover image (optional)"
            className="col-span-12 md:col-span-6"
          />
          <fieldset
            className="form-control col-span-12"
            data-color-mode={theme === 'light' ? 'light' : 'dark'}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
    </>
  );
};

export default CreateForm;
