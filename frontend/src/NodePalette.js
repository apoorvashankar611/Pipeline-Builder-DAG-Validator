export default function NodePalette() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType }),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const nodeStyle = {
    padding: "8px 12px",
    marginBottom: 8,
    background: "#f3f4f6",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    cursor: "grab",
    fontSize: 13,
  };

  return (
    <div
      style={{
        width: 160,
        padding: 10,
        borderRight: "1px solid #e5e7eb",
        background: "#fafafa",
      }}
    >
      <div
        draggable
        onDragStart={(e) => onDragStart(e, "customInput")}
        style={nodeStyle}
      >
        Input
      </div>

      <div
        draggable
        onDragStart={(e) => onDragStart(e, "text")}
        style={nodeStyle}
      >
        Text
      </div>

      <div
        draggable
        onDragStart={(e) => onDragStart(e, "llm")}
        style={nodeStyle}
      >
        LLM
      </div>

      <div
        draggable
        onDragStart={(e) => onDragStart(e, "customOutput")}
        style={nodeStyle}
      >
        Output
      </div>
    </div>
  );
}
