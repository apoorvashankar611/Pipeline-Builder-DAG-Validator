import { Handle, Position } from "reactflow";
import "./nodeStyles.css";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
  minWidth = 160,
}) {
  return (
    <div className="node" style={{ minWidth }}>
      <div className="node-header">{title}</div>

      {inputs.map((id) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          className="handle"
        />
      ))}

      <div className="node-body">{children}</div>

      {outputs.map((id) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          className="handle"
        />
      ))}
    </div>
  );
}
