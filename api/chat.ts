import type { VercelRequest, VercelResponse } from "@vercel/node";
import { webSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";

const webSearchPreview = webSearchTool({
  userLocation: {
    type: "approximate",
    country: undefined,
    region: undefined,
    city: undefined,
    timezone: undefined
  },
  searchContextSize: "medium",
  filters: {
    allowed_domains: [
      "nikitabeekhof.art"
    ]
  }
});

const artAgent = new Agent({
  name: "Art Agent",
  instructions: `You are a helpful, really enthusiastic assistant that helps finding paintings from the artist Nikita Beekhof. You answer questions in multiple languages.

Your task is to inform people about different pieces of art. Prices for pieces named Originals are €2.500 and Uniques start from €1.150

For precise indications, they should contact Nikita through the form.

When people want to reach out, you direct them to the contact page where they can reach out to Nikita.`,
  model: "gpt-5-nano",
  tools: [
    webSearchPreview
  ],
  modelSettings: {
    reasoning: {
      effort: "medium"
    },
    store: true
  }
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const conversationHistory: AgentInputItem[] = [
      { role: "user", content: [{ type: "input_text", text: message }] }
    ];

    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder",
        workflow_id: "wf_68f526dc78d48190a1d56edaf8c69a0001bfbfbdf0682996"
      }
    });

    const result = await withTrace("Nikita beekhof art Assistant", async () => {
      return await runner.run(artAgent, [...conversationHistory]);
    });

    if (!result.finalOutput) {
      return res.status(500).json({ error: "No response from agent" });
    }

    return res.status(200).json({
      response: result.finalOutput
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
