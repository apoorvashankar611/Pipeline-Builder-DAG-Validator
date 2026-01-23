export async function submitPipeline(nodes, edges) {
  const res = await fetch(
    "https://pipeline-builder-dag-validator-2.onrender.com/pipelines/parse",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // backend expects list of node IDs
        nodes: nodes.map((n) => n.id),

        // backend expects source + target only
        edges: edges.map((e) => ({
          source: e.source,
          target: e.target,
        })),
      }),
    },
  );

  const data = await res.json();

  alert(
    `Pipeline Summary ✅
    
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
DAG: ${data.is_dag ? "Yes" : "No"}`,
  );
}
