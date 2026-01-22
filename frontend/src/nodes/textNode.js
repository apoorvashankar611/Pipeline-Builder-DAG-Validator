import { useMemo, useState } from "react";
import BaseNode from "./BaseNode";

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;

export default function TextNode() {
  const [text, setText] = useState("");

  const variables = useMemo(() => {
    const vars = new Set();
    let match;
    while ((match = VAR_REGEX.exec(text))) {
      vars.add(match[1]);
    }
    return [...vars];
  }, [text]);

  return (
    <BaseNode title="Text" inputs={variables} outputs={["out"]} minWidth={220}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text… use {{variable}}"
        rows={Math.max(2, text.split("\n").length)}
        style={{
          width: "100%",
          background: "#020617",
          color: "white",
          border: "1px solid #334155",
          borderRadius: 6,
          padding: 6,
          resize: "none",
        }}
      />
    </BaseNode>
  );
}
