'use client';

import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export function DescriptionViewer({ content }: { content: string }) {
  const editor = useEditor(
    {
      editable: false,
      content,
      editorProps: {
        attributes: {
          class:
            'text-sm text-neutral-200 prose max-w-none custom-scrollable-element h-[400px] overflow-y-auto mb-8',
        },
      },
      extensions: [
        StarterKit,
        Paragraph,
        Text,
        Heading.configure({
          levels: [1, 2, 3, 4],
        }),
      ],
    },
    [content]
  );

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
}
