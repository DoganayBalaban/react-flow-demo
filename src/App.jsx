import React, { useCallback, useMemo, useState } from 'react';
import '@xyflow/react/dist/style.css';
import { ReactFlow, useNodesState , useEdgesState, addEdge, MiniMap, Controls, Background, Panel } from '@xyflow/react';
import { defaultNodes } from './nodes';
import { defaultEdges } from './edges';
import {TextUpdaterNode} from "./TextUpdaterNode"

 const nodeColorMap = (node) =>{
  switch (node.type){
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A5';
    default:
      return '#ff0072';

  }
 }
 


export default function App() {
  const [variant, setVariant] = useState("dots")
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  // const onConnect = useCallback(
  //     (params) => setEdges((eds) => addEdge({...params, animated:true},eds)),
  //     [setEdges]
  // )
  //  const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes],
  // );
  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges],
  // );
  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);
  return (
     // ReactFlow mutlaka w ve h içeren bir kapsayıcıyla çalışmalı
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} nodeTypes={nodeTypes}  fitView >
        <Controls/>
        <MiniMap nodeColor={nodeColorMap} nodeStrokeWidth={3} zoomable pannable/>
        <Background variant= {variant} gap={12} size={1}/>
        <Panel position='top-center'>
          <div className='space-x-2'>
            <p>Choose Variant:</p>
            <button className='border rounded p-1' onClick={()=>setVariant("dots")}>Dots</button>
            <button className='border rounded p-1' onClick={()=>setVariant("lines")} >Lines</button>
            <button className='border rounded p-1' onClick={()=>setVariant("cross")}>Cross</button>
          </div>  
        
        </Panel>     
      </ReactFlow>
    </div>
  );
}