export async function submitPipeline(nodes, edges) {
  const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nodes, edges }),
  });

  const data = await res.json();

  alert(
    `Pipeline Summary:
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
DAG: ${data.is_dag ? "Yes" : "No"}`,
  );
}
