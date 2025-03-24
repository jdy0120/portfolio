import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData, API, BlockMutationEvent } from "@editorjs/editorjs";
import { MarkdownEditorStyles } from "./MarkdownEditor.styles";
import { getEditorJsTools } from "./tools";
import "./editor.css";

interface MarkdownEditorProps {
  data: OutputData;
  onChange: (data: OutputData) => void;
  holder: string;
  uploadByFile: (file: File) => Promise<any>;
}

const MarkdownEditor = ({ data, onChange, holder, uploadByFile }: MarkdownEditorProps) => {
  const ref = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: getEditorJsTools({ uploadByFile }),
        data: data,
        async onChange(api: API, event: BlockMutationEvent | BlockMutationEvent[]) {
          const content = await api.saver.save();
          console.log(event);
          onChange(content);
        },
      });
      ref.current = editor;
    }
    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
      ref.current = null;
    };
  }, [data.blocks.length]);

  return <MarkdownEditorStyles.Container id={holder} />;
};

export default MarkdownEditor;
