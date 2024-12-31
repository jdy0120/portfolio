import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import { uploadToTemp } from "../../../app/apis/v1/upload/uploadtotemp.api";

import Image from "@editorjs/image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import InlineCode from "@editorjs/inline-code";

interface EditorJsTools {
  [key: string]: ToolConstructable | ToolSettings;
}

export const EDITOR_JS_TOOLS: EditorJsTools = {
  image: {
    class: Image,
    config: {
      uploader: {
        accept: ["image/*"],
        endpoint: "/api/upload",
        async uploadByFile(file: File) {
          const res = await uploadToTemp(file);
          return {
            success: 1,
            file: {
              url: "http://localhost:3003/_next/image?url=%2Fassets%2Flogos%2Flogo.png&w=32&q=75",
            },
          };
        },
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
