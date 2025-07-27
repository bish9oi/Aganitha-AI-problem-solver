"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Video } from "lucide-react"

export default function DemoPage() {
  const demoExamples = [
    {
      problem: "How to implement user authentication in a React app?",
      category: "technical",
      complexity: "intermediate",
      solution: "Comprehensive guide with JWT, OAuth, and best practices",
    },
    {
      problem: "Explain machine learning algorithms for beginners",
      category: "educational",
      complexity: "beginner",
      solution: "Step-by-step explanation with real-world examples",
    },
    {
      problem: "Create a marketing strategy for a startup",
      category: "business",
      complexity: "advanced",
      solution: "Detailed strategy with market analysis and implementation plan",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Video className="w-10 h-10 text-purple-600" />
            Project Demonstration
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This project demonstrates the mandatory use of Large Language Models (LLMs) for problem-solving assistance.
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Project Requirements Fulfilled
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800">✓ LLM Integration</Badge>
                  <p className="text-sm text-gray-600">Uses xAI Grok-3 model for problem-solving</p>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800">✓ AI SDK Implementation</Badge>
                  <p className="text-sm text-gray-600">Leverages Vercel AI SDK for structured outputs</p>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-purple-100 text-purple-800">✓ Interactive Interface</Badge>
                  <p className="text-sm text-gray-600">User-friendly problem-solving interface</p>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-yellow-100 text-yellow-800">✓ Multiple Use Cases</Badge>
                  <p className="text-sm text-gray-600">Code generation, concept explanation, problem solving</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                AI Integration Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ AI Fully Enabled:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                    <li>Connected to xAI Grok-3 model</li>
                    <li>Real-time AI problem solving</li>
                    <li>Structured response generation</li>
                    <li>Code generation capabilities</li>
                    <li>Concept explanation features</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Security Note:</h4>
                  <p className="text-sm text-yellow-700">
                    API key is currently hardcoded for demonstration. In production, use environment variables and
                    regenerate your API key for security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Demo Examples
              </CardTitle>
              <CardDescription>Sample problems solved using LLM assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demoExamples.map((example, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{example.problem}</h4>
                      <div className="flex gap-2">
                        <Badge variant="outline">{example.category}</Badge>
                        <Badge variant="outline">{example.complexity}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{example.solution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                Video Demonstration Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Recording Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-orange-700">
                    <li>Show the main interface and explain LLM integration</li>
                    <li>Demonstrate problem-solving with different types of queries</li>
                    <li>Show code generation capabilities</li>
                    <li>Explain concept explanation feature</li>
                    <li>Highlight the structured output from the AI model</li>
                    <li>Show the categorization and complexity assessment</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Technical Highlights to Cover:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                    <li>xAI Grok-3 model integration using AI SDK</li>
                    <li>Structured output generation with Zod schemas</li>
                    <li>Real-time problem analysis and solution generation</li>
                    <li>Multiple problem-solving modes (solver, code, explain)</li>
                    <li>Responsive design and user experience</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
