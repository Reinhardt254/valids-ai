import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4, 5],
    },
  }),
  Image.configure({
    allowBase64: true,
  }),
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "text-blue-500 underline",
    },
  }),
];

interface TiptapProps {
  content: string;
  onChange: (content: string) => void;
}

export function Tiptap({ content, onChange }: TiptapProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [showImageInput, setShowImageInput] = useState(false);

  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[300px]",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl("");
      setShowImageInput(false);
    }
  };

  return (
    <div className="border rounded-md p-2 min-h-[300px] bg-white">
      <EditorContent editor={editor} />
      <FloatingMenu
        editor={editor}
        className="flex gap-1 p-1 bg-white border rounded-md shadow-lg"
      >
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          variant={
            editor.isActive("heading", { level: 1 }) ? "default" : "ghost"
          }
          size="sm"
          className="text-white"
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          variant={
            editor.isActive("heading", { level: 2 }) ? "default" : "ghost"
          }
          size="sm"
          className="text-white"
        >
          H2
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          variant={
            editor.isActive("heading", { level: 3 }) ? "default" : "ghost"
          }
          size="sm"
          className="text-white"
        >
          H3
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          variant={
            editor.isActive("heading", { level: 4 }) ? "default" : "ghost"
          }
          size="sm"
          className="text-white"
        >
          H4
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          variant={
            editor.isActive("heading", { level: 5 }) ? "default" : "ghost"
          }
          size="sm"
          className="text-white"
        >
          H5
        </Button>
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          variant={editor.isActive("paragraph") ? "default" : "ghost"}
          size="sm"
          className="text-white"
        >
          P
        </Button>
        <Button
          onClick={() => setShowImageInput(!showImageInput)}
          variant="ghost"
          size="sm"
          className="bg-blue-500 text-white"
        >
          Image
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          variant={editor.isActive("bold") ? "default" : "ghost"}
          size="sm"
          className="text-white"
        >
          Bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          variant={editor.isActive("italic") ? "default" : "ghost"}
          size="sm"
          className="text-white"
        >
          Italic
        </Button>
      </FloatingMenu>

      {showImageInput && (
        <div className="mt-2 p-2 border rounded-md bg-gray-50">
          <div className="flex gap-2">
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              className="flex-1"
            />
            <Button onClick={addImage} size="sm">
              Add
            </Button>
          </div>
        </div>
      )}

      <BubbleMenu
        editor={editor}
        className="flex gap-1 p-1 bg-white border rounded-md shadow-lg"
      >
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          variant={editor.isActive("bold") ? "default" : "ghost"}
          size="sm"
        >
          Bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          variant={editor.isActive("italic") ? "default" : "ghost"}
          size="sm"
        >
          Italic
        </Button>
        <Button
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleLink({ href: "https://example.com" })
              .run()
          }
          variant={editor.isActive("link") ? "default" : "ghost"}
          size="sm"
        >
          Link
        </Button>
      </BubbleMenu>
    </div>
  );
}
