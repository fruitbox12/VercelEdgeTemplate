import { NextResponse } from 'next/server';

export default async function handler(req) {
  const requestBody = await req.text();
  const workflow = JSON.parse(requestBody);

  let executionResults = [];

  // Assuming a linear workflow for simplicity
  for (const node of workflow.nodes) {
    if (node.data.actions.method === "GET") {
      const response = await fetch(node.data.inputParameters.url);
      const data = await response.json();
      executionResults.push({
        nodeId: node.id,
        result: data
      });
    }
    // For more complex workflows, implement state transition logic here
  }

  const response = {
    executionResults: executionResults
  };

  return new NextResponse(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
