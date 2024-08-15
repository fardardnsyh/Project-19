'use client';
import { type Editor } from '@tiptap/react';
import {
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  ItalicIcon,
  ListIcon,
  Redo,
  TextIcon,
  Undo,
} from 'lucide-react';

import { Toggle } from '../ui/toggle';

type Props = {
  editor: Editor | null;
};

export function Toolbar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <div className='flex space-x-2'>
      <Toggle
        size='sm'
        variant={'default'}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <BoldIcon className='mr-1 h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'default'}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <ItalicIcon className='mr-1 h-4 w-4' />
      </Toggle>

      <Toggle
        size='sm'
        variant={'default'}
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <TextIcon className='mr-1 h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'default'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <Heading1Icon className='mr-1 h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'default'}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <Heading2Icon className='mr-1 h-4 w-4' />
      </Toggle>

      <Toggle
        size='sm'
        variant={'default'}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <ListIcon className='mr-1 h-4 w-4' />
      </Toggle>

      <Toggle
        size='sm'
        variant={'default'}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo className='mr-1 h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'default'}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo className='mr-1 h-4 w-4' />
      </Toggle>
      {/* <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </Toggle> */}
    </div>
  );
}
