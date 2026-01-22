from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
from collections import defaultdict, deque

app = FastAPI()

# 🔴 THIS WAS MISSING
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = defaultdict(list)
    indegree = defaultdict(int)

    for edge in pipeline.edges:
        graph[edge["source"]].append(edge["target"])
        indegree[edge["target"]] += 1

    queue = deque(
        node["id"] for node in pipeline.nodes if indegree[node["id"]] == 0
    )

    visited = 0
    while queue:
        curr = queue.popleft()
        visited += 1
        for nxt in graph[curr]:
            indegree[nxt] -= 1
            if indegree[nxt] == 0:
                queue.append(nxt)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": visited == num_nodes,
    }
