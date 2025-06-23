export const defaultEdges = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "customEdge" },
  { id: "2-3", source: "2", sourceHandle: "a", target: "3", animated: true },
  { id: "2-3.2", source: "2", sourceHandle: "b", target: "3", animated: true },
  { id: "c->d", type: "sineEdge", source: "c", target: "d" },
  { id: "b->c", source: "groupa", target: "groupb" },
];
