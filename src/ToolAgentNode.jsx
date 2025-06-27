import React from "react";
import { Handle, Position } from "@xyflow/react";
import { Bot, Info } from "lucide-react";
export default function ToolAgentNode({ data }) {
  return (
    <div className="bg-white border-2 border-blue-300 rounded-lg p-6 min-w-[300px] shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Bot className="w-8 h-8 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800">Tool Agent</h2>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-gray-700">Inputs</h3>
      </div>

      <div className="space-y-4">
        {data.inputs.map((input, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-blue-400 relative"
          >
            <Handle
              type="target"
              position={Position.Left}
              id={`input-${index}`}
              className="w-3 h-3 bg-blue-400 !left-[-6px]"
            />
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">
                {input.name}
                {input.required && <span className="text-red-500 ml-1">*</span>}
              </span>
            </div>
            {input.hasInfo && <Info className="w-4 h-4 text-gray-500" />}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-blue-100 text-blue-600 rounded-lg border border-blue-300 hover:bg-blue-200 transition-colors">
          Additional Parameters
        </button>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Output</h3>
        <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg relative">
          <Handle
            type="source"
            position={Position.Right}
            id="output"
            className="w-3 h-3 bg-blue-400 !right-[-6px]"
          />
          <span className="font-medium text-gray-700">AgentExecutor</span>
        </div>
      </div>
    </div>
  );
}
