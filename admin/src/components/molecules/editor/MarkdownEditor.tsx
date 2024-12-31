import React, { useEffect, useRef } from "react";

import EditorJS, {
  OutputData,
  API,
  BlockMutationEvent,
} from "@editorjs/editorjs";
import { MarkdownEditorStyles } from "./MarkdownEditor.styles";
import { EDITOR_JS_TOOLS } from "./tools";

import "./editor.css";

interface MarkdownEditorProps {
  data: OutputData;
  onChange: (data: OutputData) => void;
  holder: string;
}

const MarkdownEditor = ({
  data,
  onChange,
  holder,
}: MarkdownEditorProps) => {
  const ref = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_JS_TOOLS,
        data: data,
        async onChange(
          api: API,
          event: BlockMutationEvent | BlockMutationEvent[]
        ) {
          const content = await api.saver.save();
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
    };
  }, []);

  return <MarkdownEditorStyles.Container id={holder} />;
};

export default MarkdownEditor;
