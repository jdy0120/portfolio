import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import InlineCode from "@editorjs/inline-code";

interface EditorJsToolsProps {
  uploadByFile: (file: File) => Promise<any>;
}

export const getEditorJsTools = ({
  uploadByFile,
}: EditorJsToolsProps): {
  [key: string]: ToolConstructable | ToolSettings;
} => {
  return {
    image: {
      class: Image,
      config: {
        uploader: {
          accept: ["image/*"],
          uploadByFile,
        },
      },
    },
    paragraph: {
      inlineToolbar: true,
    },
    header: Header,
    list: List,
    inlineCode: InlineCode,
  };
};
