import BaseNode from "./BaseNode";

export default function LLMNode() {
  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <div style={{ opacity: 0.7 }}>Large Language Model</div>
    </BaseNode>
  );
}
