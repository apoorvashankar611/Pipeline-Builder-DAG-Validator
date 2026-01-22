import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { PipelineUI } from "./ui";
import { submitPipeline } from "./submit";
import NodePalette from "./NodePalette";

export default function App() {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow,
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <NodePalette />

      <div style={{ flex: 1 }}>
        <PipelineUI />
        <div style={{ padding: 12 }}>
          <button
            onClick={() => submitPipeline(nodes, edges)}
            style={{
              padding: "8px 16px",
              background: "#2563eb",
              color: "white",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
