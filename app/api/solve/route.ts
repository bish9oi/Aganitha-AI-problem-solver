import { generateObject, generateText } from "ai"
import { createXai } from "@ai-sdk/xai"
import { z } from "zod"

const problemSchema = z.object({
  category: z.enum(["technical", "creative", "analytical", "educational", "business"]),
  complexity: z.enum(["beginner", "intermediate", "advanced"]),
  estimatedTime: z.string(),
  keySteps: z.array(z.string()),
  resources: z.array(z.string()),
  solution: z.string(),
})

export async function POST(request: Request) {
  try {
    const { problem, type } = await request.json()

    // Create xAI client with API key
    const xaiClient = createXai({
      apiKey: "xai-w0SKC9zYqukirLlACbF4nIYukGYOyDeRi1jOpkZbkfc8keJWYT1WTZoTzmdvPNdA8KAXfackdesylA0V",
    })

    const model = xaiClient("grok-3")

    if (type === "structured") {
      const result = await generateObject({
        model,
        schema: problemSchema,
        prompt: `Analyze this problem and provide a structured solution: "${problem}". 
        Break it down into clear steps, categorize it appropriately, estimate complexity and time needed, 
        suggest helpful resources, and provide a comprehensive solution approach.`,
      })

      return Response.json(result.object)
    } else {
      const result = await generateText({
        model,
        prompt: `Solve this problem with detailed explanation: "${problem}". Provide actionable steps and clear guidance.`,
      })

      return Response.json({ solution: result.text })
    }
  } catch (error) {
    console.error("Error in solve API:", error)
    return Response.json({ error: "Failed to solve problem" }, { status: 500 })
  }
}
